import Dropdown from "@/app/components/ui/Dropdown";
import Badge from "@/app/components/ui/Badge";
import Input from "@/app/components/ui/Input";

export default function Hero() {
  return (
    <div className="m-20 flex flex-col gap-2">
      <div className="flex items-center gap-[40px]">
        <Input variant='default' placeholder='Поиск' />
      </div>
    </div>
  );
}
