import {ReactNode} from "react";

type ButtonProps = {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tretiary' | 'quarteriary' | 'quinary';
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: 'bg-[var(--color-accent)] font-semibold text-white border-[2px] border-[var(--color-accent)]' +
    ' hover:bg-white hover:text-[var(--color-accent)]' +
    ' active:bg-[var(--color-accent-active)] active:text-white',
  secondary: 'bg-white font-semibold text-[color:var(--color-accent)] py-[20px] px-[40px]' +
    ' hover:bg-[var(--color-accent)] hover:text-white' +
    ' active:bg-[var(--color-accent-active)] active:text-white',
  tretiary: 'bg-white font-semibold text-[color:var(--color-accent)] border-[2px] border-[var(--color-accent)]' +
    ' hover:bg-[var(--color-accent)] hover:text-white' +
    ' active:bg-[var(--color-accent-active)] active:text-white',
  quarteriary: 'bg-[var(--color-primary)] text-white py-[20px] px-[40px]' +
    ' hover:bg-[var(--color-primary-hover)]' +
    ' active:bg-[var(--color-primary)]',
  quinary: 'bg-white font-semibold text-[color:var(--color-accent)] py-[20px] px-[120px]' +
    ' hover:bg-[var(--color-accent)] hover:text-white' +
    ' active:bg-[var(--color-accent-active)] active:text-white',
}

export default function Button({children, variant, className, onClick}: ButtonProps) {
  return (
    <button className={`${variants[variant]} ${className ?? ''} py-[16px] px-[38px] cursor-pointer block w-fit uppercase transition duration-100`} onClick={onClick}>
      {children}
    </button>
  )
}
