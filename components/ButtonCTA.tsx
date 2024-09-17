
import Link from "next/link";
import { IconType } from "react-icons";


export function ButtonCTA({link,label,Icon}:{link:string,label:string,Icon:IconType}){


    return (
      <Link
        href={link}
        className="flex items-center gap-2 uppercase text-white bg-blue-800  px-5 py-2 justify-center rounded-full"
      >
        <span>{label}</span>
        <Icon className="w-5 h-5" />
      </Link>
    );
  };