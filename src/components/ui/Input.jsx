/**
 * src/components/ui/Input.jsx
 * Accessible text input with label, helper text, and validation states.
 * Used in ContactFeedback form, Search, and any future forms.
 */
import { memo, useId } from 'react';

const Input = memo(function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  helperText,
  error,
  required = false,
  disabled = false,
  className = '',
  inputClassName = '',
  autoComplete,
  maxLength,
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

      <input
        id={fieldId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-describedby={
          [error ? errorId : null, helperText ? helperId : null]
            .filter(Boolean)
            .join(' ') || undefined
        }
        aria-invalid={error ? 'true' : undefined}
        className={[
          'w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-800 bg-white',
          'placeholder:text-slate-400',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          error
            ? 'border-danger focus:border-danger focus:ring-danger/30'
            : 'border-slate-200 focus:border-navy-400 focus:ring-navy-400/20',
          disabled
            ? 'opacity-50 cursor-not-allowed bg-slate-50'
            : '',
          inputClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />

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

export default Input;
