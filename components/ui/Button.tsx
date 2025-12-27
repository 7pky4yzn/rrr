import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 border border-transparent",
    secondary: "bg-[#1d1d1f] text-white hover:bg-[#2c2c2e] border border-transparent",
    link: "bg-transparent text-[#2997ff] hover:underline p-0 h-auto justify-start"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-8 py-3.5"
  };

  const appliedVariant = variants[variant];
  const appliedSize = variant === 'link' ? '' : sizes[size];

  return (
    <button 
      className={`${baseStyles} ${appliedVariant} ${appliedSize} ${className}`}
      {...props}
    >
      {children}
      {variant === 'link' && (
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};