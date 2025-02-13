import { usePathname } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

type  MenuItem = { label:string, link:string };

function getFristPieceFromLink(link:string){
  return `/${String(link).split("/")[1]}`
}
export function MenuLinkList({renderCol,linkList,className}:{renderCol:boolean,linkList:MenuItem[],className:string}) {
    const pathname = usePathname();
  
    const renderLinks = useCallback(
      ({ label, link }: MenuItem, idx: number) => {

        const isSelect = getFristPieceFromLink(pathname) === link;
  
        return (
          <Link
            href={link}
            key={idx}
            className={`h-fit text-sm uppercase text-copy/50 ${
              isSelect
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
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

