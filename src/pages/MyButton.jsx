import * as React from "react"

export function Button({ className = "", variant = "default", children, ...props }) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-700",
    outline: "border border-slate-300 bg-white hover:bg-slate-100",
    ghost: "hover:bg-slate-100",
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
