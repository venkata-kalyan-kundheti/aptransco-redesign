/**
 * src/components/ui/Modal.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessible modal dialog: focus trap, Escape-to-close, backdrop click.
 *
 * Usage:
 *   <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm Action">
 *     <p>Modal content here</p>
 *   </Modal>
 */
import { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',      // 'sm' | 'md' | 'lg' | 'xl'
  hideClose = false,
  className = '',
}) {
  const dialogRef  = useRef(null);
  const closeRef   = useRef(null);

  const SIZE_CLASSES = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Focus trap — focus close button on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        className={[
          'relative bg-white rounded-xl shadow-2xl w-full z-10',
          'flex flex-col max-h-[90vh]',
          SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
          className,
        ].join(' ')}
      >
        {/* Header */}
        {(title || !hideClose) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
            {title && (
              <h2 id="modal-title" className="text-lg font-bold text-navy-800">
                {title}
              </h2>
            )}
            {!hideClose && (
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center text-slate-400
                  hover:text-navy-700 hover:bg-slate-100 transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </div>
        )}

        {/* Content (scrollable) */}
        <div className="overflow-y-auto px-6 py-5 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
