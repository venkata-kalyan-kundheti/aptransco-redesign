/**
 * src/components/ui/Select.jsx
 * Accessible dropdown select with label and validation states.
 * Used in FilterBar, forms, and sort controls.
 */
import { memo, useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Select = memo(function Select({
  label,
  id,
  value,
  onChange,
  options = [],      // [{ value, label, disabled? }]
  placeholder,       // shown as first disabled option
  helperText,
  error,
  required = false,
  disabled = false,
  className = '',
  selectClassName = '',
  ...rest
}) {
  const generatedId = useId();
  const fieldId   = id ?? generatedId;
  const helperId  = `${fieldId}-helper`;
  const errorId   = `${fieldId}-error`;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-semibold text-navy-700"
        >
          {label}
          {required && (
            <span className="text-danger ml-1" aria-hidden="true">*</span>
          )}
        </label>
      )}

      {/* Wrapper positions the chevron icon */}
      <div className="relative">
        <select
          id={fieldId}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-describedby={
            [error ? errorId : null, helperText ? helperId : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
          aria-invalid={error ? 'true' : undefined}
          className={[
            'w-full appearance-none rounded-lg border px-3.5 py-2.5 pr-9',
            'text-sm text-slate-800 bg-white',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            error
              ? 'border-danger focus:border-danger focus:ring-danger/30'
              : 'border-slate-200 focus:border-navy-400 focus:ring-navy-400/20',
            disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : '',
            selectClassName,
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron — purely decorative */}
        <ChevronDownIcon
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-xs text-danger flex items-center gap-1">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}

      {helperText && !error && (
        <p id={helperId} className="text-xs text-slate-400">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Select;
