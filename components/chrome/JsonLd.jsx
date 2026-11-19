// Structured data as plain <script> tags (it is data, not executable code). `<` is escaped so content
// containing "</script>" cannot break out of the tag. Accepts one object or a list.
export default function JsonLd({ data }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  return items.map((item, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
    />
  ));
}
