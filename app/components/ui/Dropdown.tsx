"use client"

import {useState} from "react";
import Image from "next/image";

type DropdownProps = {
  label: string;
  icon?: boolean;
}

export default function Dropdown({label, icon}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button onClick={() => (setIsOpen(!isOpen))} className="flex gap-[72px] items-center cursor-pointer">
      <span className="flex items-center gap-[12px] uppercase text-(--color-primary)">
        {icon && <Image src="/icons/burger.svg" alt="" width={16} height={10} aria-hidden />}
        {label}
      </span>
      <Image
        src="/icons/chevron.svg"
        alt=""
        width={10}
        height={5}
        className={`transition-rotate duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
}
