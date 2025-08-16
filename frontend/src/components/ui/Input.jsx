import React from 'react';
import { motion } from 'framer-motion';

const Input = ({ 
  label, 
  error, 
  touched, 
  required = false,
  className = '',
  ...props 
}) => {
  const hasError = touched && error;

  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={props.id || props.name} 
          className="block text-amber-200 mb-2 crimson-text-bold"
        >
          {label}
          {required && <span className="text-red-400 ml-1" aria-label="required">*</span>}
        </label>
      )}
      <motion.input
        initial={{ borderColor: 'rgb(253, 230, 138)' }}
        animate={{ 
          borderColor: hasError ? 'rgb(239, 68, 68)' : 'rgb(253, 230, 138)',
          boxShadow: hasError ? '0 0 0 1px rgb(239, 68, 68)' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className={`
          w-full text-amber-100 border-b-2 bg-transparent 
          crimson-text-semibold text-center py-2 px-3
          focus:outline-none focus:border-amber-100 focus:bg-amber-200 focus:bg-opacity-5
          transition-all duration-200
          ${hasError ? 'border-red-500' : 'border-amber-200'}
          ${className}
        `}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${props.name}-error` : undefined}
        {...props}
      />
      {hasError && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1 crimson-text-regular"
          id={`${props.name}-error`}
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;