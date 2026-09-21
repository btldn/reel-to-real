import Image from "next/image";

type InputProps = {
  variant: 'small' | 'default';
  placeholder: string;
  icon?: boolean;
}

const variants = {
  default: 'text-[24px] p-[20px] border-[2px] border-(--color-neutral-muted)',
  small: 'text-[16px] p-[16px] border border-(--color-neutral-muted)',
}

export default function Input({ placeholder, variant, icon }: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <Image
          src="/icons/search.svg"
          alt=""
          width={variant === 'small' ? 16 : 20}
          height={variant === 'small' ? 16 : 20}
          className={`absolute top-1/2 -translate-y-1/2 ${variant === 'small' ? 'left-[16px]' : 'left-[20px]'}`}
        />
      )}
      <input className={`${variants[variant]} ${icon ? (variant === 'small' ? 'pl-[44px]' : 'pl-[52px]') : ''}`} type="text" placeholder={placeholder} />
    </div>
  );
}
