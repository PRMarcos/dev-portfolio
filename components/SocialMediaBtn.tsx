type SocialMeidaItem = {label: string; link: string; SocialIcon:IconType}

import { IconType } from "react-icons";

export default function SocialMediaBtn (input: SocialMeidaItem, idx: number) {
  const { label, link, SocialIcon } = input;
    return (
      <a
        href={link}
        key={idx}
        className=" text-sm font-medium uppercase border border-gray-200 text-gray-900 hover:border-[#0582b6] px-2 py-2 flex justify-center rounded-full hover:bg-[#e7f8ff] hover:text-[#0582b6]"
      >
        <SocialIcon className="w-5 h-5"/>
       
      </a>
    );
  };