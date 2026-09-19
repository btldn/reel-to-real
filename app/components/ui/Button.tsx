import {ReactNode} from "react";

type ButtonProps = {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tretiary' | 'quarteriary' | 'quinary';
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: 'primary',
  secondary: 'secondary',
  tretiary: 'tretiary',
  quarteriary: 'quarteriary',
  quinary: 'quinary',
}

export default function Button({children, variant, className, onClick}: ButtonProps) {
  return (
    <button className={`${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
