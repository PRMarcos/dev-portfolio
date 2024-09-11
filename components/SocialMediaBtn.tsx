import type { Item } from "@/type";

export function SocialMedia ({ label, link }: Item, idx: number) {
    return (
      <a
        href={link}
        key={idx}
        className="text-sm font-medium uppercase border border-gray-200 text-gray-900 hover:border-[#0582b6] px-5 py-2 flex justify-center rounded-full hover:bg-[#e7f8ff] hover:text-[#0582b6]"
      >
        {label}
      </a>
    );
  };