import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-navy-200 mb-4" aria-hidden="true">404</div>
        <h1 className="text-2xl font-bold text-navy-700 mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Go to Homepage</Link>
          <Link to="/sitemap" className="btn-secondary">View Sitemap</Link>
        </div>
      </div>
    </div>
  );
}
