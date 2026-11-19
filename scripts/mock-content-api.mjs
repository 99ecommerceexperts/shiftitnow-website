// A stand-in for the content API served by the Price Mirror backend, for local development only.
// It serves the 17 original articles and 3 testimonials from scripts/data/dev-content.json using the same
// URLs and response shapes as https://www.pricemirror.in/api/public/shiftitnow (see README).
import fs from 'node:fs';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

export function startMockContentApi(port = 3400) {
  const data = JSON.parse(fs.readFileSync(fileURLToPath(new URL('./data/dev-content.json', import.meta.url)), 'utf8'));
  const posts = data.posts; // newest first
  const send = (res, status, body) => {
    res.writeHead(status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(body));
  };
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const match = url.pathname.match(/^\/api\/public\/shiftitnow\/(blogs|reviews)(?:\/([^/]+))?$/);
    if (!match) return send(res, 404, { error: 'Not found' });
    if (match[1] === 'reviews') return send(res, 200, data.reviews);
    if (!match[2]) {
      const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
      const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit')) || 9));
      const slice = posts.slice((page - 1) * limit, page * limit).map(({ content_html, ...summary }) => summary);
      return send(res, 200, { posts: slice, hasMore: page * limit < posts.length, page, total: posts.length });
    }
    const index = posts.findIndex(post => post.slug === match[2]);
    if (index < 0) return send(res, 404, { error: 'Post not found' });
    const brief = post => (post ? { slug: post.slug, title: post.title } : null);
    return send(res, 200, { post: posts[index], previous: brief(posts[index + 1]), next: brief(posts[index - 1]) });
  });
  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.MOCK_API_PORT || 3400);
  await startMockContentApi(port);
  console.log(`Mock content API on http://localhost:${port}/api/public/shiftitnow`);
}
