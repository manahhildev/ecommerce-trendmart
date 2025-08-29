// src/components/ui/card.jsx
import * as React from "react"

export function MyCard({ className = "", children, ...props }) {
  return (
    <div className={`rounded-xl border bg-white text-slate-900 shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`p-4 pb-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className = "", children, ...props }) {
  return (
    <div className={`p-4 pt-0 flex items-center justify-between ${className}`} {...props}>
      {children}
    </div>
  )
}
