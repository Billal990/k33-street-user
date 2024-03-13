import { Icon } from "@iconify/react";

export default function Market({market}) {
    const {marketName, marketCategory, marketDistance} = market || {};
  return (
    <div className="flex items-center gap-[1.25rem]">
      <Icon
        className="text-[2.5rem] text-[#24B24B]"
        icon="material-symbols:school"
      />
      <div>
        <p className="space-x-[1rem]">
          <span className="text-[#B1B1B1]">{marketCategory}</span>
          <span className="bg-[#DEF4E4] px-[1rem] py-[0.5rem]">{marketDistance}</span>
        </p>
        <p className="text-[1rem] mt-[0.75rem]">{marketName}</p>
      </div>
    </div>
  );
}
