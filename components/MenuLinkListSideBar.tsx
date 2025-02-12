import { usePathname } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

type  MenuItem = { label:string, link:string };

function getFristPieceFromLink(link:string){
  return `/${String(link).split("/")[1]}`
}
export function MenuLinkListSideBar({renderCol,linkList,className}:{renderCol:boolean,linkList:MenuItem[],className:string}) {
    const pathname = usePathname();
  
    const renderLinks = useCallback(
      ({ label, link }: MenuItem, idx: number) => {

        const isSelect = getFristPieceFromLink(pathname) === link;
  
        return (
          <Link
            href={link}
            key={idx}
            className={`h-fit text-sm uppercase text-gray-900  py-1 ${
              isSelect
                ? "bg-[#0582b6] text-white rounded-sm"
                : "hover:bg-[#0581b611] "
            }`}
          >
            {label}
          </Link>
        );
      },
      [pathname]
    );
  
    return (
      <ul className={`${className}`}>
        {linkList.map(renderLinks)}
      </ul>
    );
  }

