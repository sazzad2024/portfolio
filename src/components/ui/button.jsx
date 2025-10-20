import React from 'react'

const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
const variants = {
  default: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 focus:ring-gray-400',
  outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700'
}

export function Button({ variant = 'default', asChild = false, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant] ?? variants.default} ${className}`
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: `${classes} ${children.props.className ?? ''}` })
  }
  return (
    <button className={classes} {...props}>{children}</button>
  )
}


