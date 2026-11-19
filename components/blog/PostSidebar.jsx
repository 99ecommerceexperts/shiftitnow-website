import { formatDate } from '@/lib/format';
import { SHOPIFY_APP_URL } from '@/lib/site';

/** Sticky sidebar: article facts plus an install card. `view` comes from postPresentation(). */
export default function PostSidebar({ post, view }) {
  return (
    <aside className="blog-detail-sidebar">
      <div className="blog-detail-sidebar-inner">
        <div className="blog-detail-sidecard">
          <h2>Article details</h2>
          <div className="blog-detail-sideitem">
            <span>Category</span>
            <strong>{view.sidebarCategory}</strong>
          </div>
          <div className="blog-detail-sideitem">
            <span>Reading time</span>
            <strong>{post.read_time}</strong>
          </div>
          <div className="blog-detail-sideitem">
            <span>Updated</span>
            <strong>{formatDate(post.updated_at || post.published_at)}</strong>
          </div>
          <div className="blog-detail-sideitem">
            <span>Focus</span>
            <strong>{view.focus}</strong>
          </div>
        </div>
        <div className="blog-detail-sidecard blog-detail-sidecard-accent">
          <h2>{view.sidebar.title}</h2>
          <p>{view.sidebar.text}</p>
          <a
            href={SHOPIFY_APP_URL}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {view.sidebar.button}
          </a>
        </div>
      </div>
    </aside>
  );
}
