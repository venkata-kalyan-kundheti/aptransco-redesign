/**
 * src/components/ui/ErrorBoundary.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Class-based error boundary with graceful fallback UI and retry button.
 *
 * Usage:
 *   <ErrorBoundary>
 *     <MyComponent />
 *   </ErrorBoundary>
 *
 * Or with custom fallback:
 *   <ErrorBoundary fallback={<p>Something went wrong.</p>}>
 */
import { Component } from 'react';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console in dev; swap for Sentry/monitoring in production
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary caught]', error, info);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div
          className="flex flex-col items-center justify-center py-20 px-6 text-center"
          role="alert"
          aria-live="assertive"
        >
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-5">
            <ExclamationTriangleIcon className="w-10 h-10 text-red-400" aria-hidden="true" />
          </div>

          <h2 className="text-lg font-bold text-navy-800 mb-2">
            Something went wrong
          </h2>
          <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
            An unexpected error occurred while loading this section. You can try
            again or return to the homepage.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={this.handleRetry}
              className="btn-primary btn-md inline-flex items-center gap-2"
            >
              <ArrowPathIcon className="w-4 h-4" aria-hidden="true" />
              Try Again
            </button>
            <a href="/" className="btn-secondary btn-md">
              Go to Homepage
            </a>
          </div>

          {import.meta.env.DEV && this.state.error && (
            <details className="mt-8 text-left max-w-xl w-full">
              <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600">
                Error details (dev only)
              </summary>
              <pre className="mt-2 p-3 bg-slate-100 rounded text-xs text-red-600 overflow-x-auto whitespace-pre-wrap">
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
