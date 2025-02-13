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
            className={`h-fit text-sm uppercase text-copy/80  py-1 ${
              isSelect
                ? "bg-primary text-copyInverted rounded-sm"
                : "hover:bg-primary/20 "
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

