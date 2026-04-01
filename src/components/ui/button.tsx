import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: '9999px',
    fontWeight: 500,
    transition: 'all 0.2s',
    outline: 'none',
    opacity: props.disabled ? 0.5 : 1,
  };

  const variantStyles: Record<'default' | 'ghost', React.CSSProperties> = {
    default: {
      backgroundColor: '#10b981',
      color: '#fff',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#1e293b',
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { height: '2rem', padding: '0 0.75rem' },
    md: { height: '2.25rem', padding: '0 1rem' },
    lg: { height: '2.5rem', padding: '0 1.5rem' },
  };

  return (
    <button
      className={`button-${variant}`}
      style={{
              ...baseStyle,
              ...variantStyles[variant],
              ...sizeStyles[size],
              ...(props.style || {}),
            }}      
            {...props}
    >
      {children}
    </button>
  );
}