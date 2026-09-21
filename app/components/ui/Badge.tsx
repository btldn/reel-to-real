import {ReactNode} from "react";

type BadgeProps = {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className='px-[8px] py-[4px] border border-(--color-accent) text-[16px] text-(--color-primary) rounded-[4px] block w-fit'>{children}</div>
  );
}
