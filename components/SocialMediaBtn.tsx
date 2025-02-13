type SocialMeidaItem = {label: string; link: string; SocialIcon:IconType}

import { IconType } from "react-icons";

export default function SocialMediaBtn (input: SocialMeidaItem, idx: number) {
  const { label, link, SocialIcon } = input;
    return (
      <a
        target="_blank"
        href={link}
        key={idx}
        className=" text-sm font-medium uppercase border border-copy/30  text-copy/90 hover:border-primary px-2 py-2 flex justify-center rounded-full hover:bg-primaryHover hover:text-primary"
      >
        <SocialIcon className="w-5 h-5"/>
       
      </a>
    );
  };