import { htmlToText } from './format.js';

/**
 * Question/answer pairs from a post body. Posts end with a heading containing "FAQ" followed by
 * <h3>question</h3><p>answer</p> pairs; the first paragraph after each question is its answer.
 */
export function extractFaq(html) {
  const source = String(html ?? '');
  const heading = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
  let start = -1;
  for (let match = heading.exec(source); match; match = heading.exec(source)) {
    if (/\bfaqs?\b|frequently asked/i.test(htmlToText(match[1]))) {
      start = heading.lastIndex;
      break;
    }
  }
  if (start < 0) return [];
  let section = source.slice(start);
  const nextHeading = section.search(/<h2\b/i);
  if (nextHeading >= 0) section = section.slice(0, nextHeading);
  const items = [];
  const pair = /<h3\b[^>]*>([\s\S]*?)<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  for (let match = pair.exec(section); match; match = pair.exec(section)) {
    // Some posts number their questions ("1. How long…"); the markup should carry the question itself.
    const question = htmlToText(match[1]).replace(/^\d+[.)]\s*/, '');
    const answer = htmlToText(match[2]);
    if (question && answer) items.push({ question, answer });
  }
  return items;
}

/** schema.org FAQPage for a post body, or null when it has no FAQ section. */
export function faqStructuredData(html) {
  const items = extractFaq(html);
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
