/**
 * src/components/ui/Button.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessible button component with all design-system variants.
 *
 * variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'gold'
 * size:    'sm' | 'md' | 'lg'
 * as:      'button' | 'a' — renders as <a> when `href` or `as="a"` supplied
 */
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg ' +
  'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const VARIANTS = {
  primary:
    'bg-navy-700 text-white hover:bg-navy-600 active:bg-navy-800 ' +
    'focus-visible:ring-navy-500',
  secondary:
    'bg-white text-navy-700 border border-navy-200 hover:bg-navy-50 ' +
    'active:bg-navy-100 focus-visible:ring-navy-400',
  ghost:
    'text-navy-700 hover:bg-navy-50 active:bg-navy-100 focus-visible:ring-navy-400',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 ' +
    'focus-visible:ring-red-500',
  gold:
    'bg-gold-400 text-navy-900 hover:bg-gold-500 active:bg-gold-600 ' +
    'focus-visible:ring-gold-400',
};

const SIZES = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size    = 'md',
    href,
    to,
    external,
    className = '',
    children,
    leftIcon,
    rightIcon,
    isLoading,
    ...props
  },
  ref
) {
  const classes = [BASE, VARIANTS[variant] ?? VARIANTS.primary, SIZES[size] ?? SIZES.md, className]
    .join(' ')
    .trim();

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
      ) : (
        leftIcon && <span className="w-4 h-4 shrink-0" aria-hidden="true">{leftIcon}</span>
      )}
      {children}
      {rightIcon && !isLoading && (
        <span className="w-4 h-4 shrink-0" aria-hidden="true">{rightIcon}</span>
      )}
    </>
  );

  // Internal router link
  if (to) {
    return (
      <Link to={to} ref={ref} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // External anchor
  if (href) {
    return (
      <a
        href={href}
        ref={ref}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} disabled={isLoading || props.disabled} {...props}>
      {content}
    </button>
  );
});

export default Button;
