import React from 'react';
import { cn } from "@/lib/utils"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
    const variantStyles = {
      default: "bg-blue-500 text-white hover:bg-blue-600",      
      destructive: "bg-red-500 text-white hover:bg-red-600",   
      outline: "border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700", 
      secondary: "bg-gray-500 text-white hover:bg-gray-600",    
      ghost: "hover:bg-gray-200 hover:text-gray-800",           
      link: "text-blue-500 underline-offset-4 hover:underline", 
    }[variant];
    
    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }[size];
    
    return (
      <button
        ref={ref}  
        className={cn(`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
