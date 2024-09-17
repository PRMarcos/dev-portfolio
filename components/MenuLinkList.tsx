import { usePathname } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

type  MenuItem = { label:string, link:string };

export function MenuLinkList({renderCol,linkList}:{renderCol:boolean,linkList:MenuItem[]}) {
    const pathname = usePathname();
  
    const renderLinks = useCallback(
      ({ label, link }: MenuItem, idx: number) => {
        const isSelect = String(pathname) === link;
  
        return (
          <Link
            href={link}
            key={idx}
            className={`text-sm uppercase text-gray-900 px-2 py-1 ${
              isSelect
                ? "border-b-2 border-[#0582b6] text-[#0582b6]"
                : "hover:text-[#0582b6]"
            }`}
          >
            {label}
          </Link>
        );
      },
      [pathname]
    );
  
    return (
      <ul className={`flex ${renderCol? "flex-col" : "flex-row"} gap-2`}>
        {linkList.map(renderLinks)}
      </ul>
    );
  }

