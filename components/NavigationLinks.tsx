import { usePathname } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

type  MenuItem = { label:string, link:string };

function getFristPieceFromLink(link:string){
  return `/${String(link).split("/")[1]}`
}
export function NavigationLinks({sidebar,linkList,className}:{sidebar:boolean,linkList:MenuItem[],className:string}) {
    const pathname = usePathname();


    let style:{
      generic:string,
      selectedTrue:string,
      selectedFalse:string
    }

  if(sidebar){
    style = {
      generic:"h-fit text-sm uppercase text-copy/80  py-1",
      selectedTrue:`bg-primary text-copyNavigationSideBar rounded-sm`,
      selectedFalse:"hover:bg-primary/20"}
  }else{
    style = {
      generic:"h-fit text-sm uppercase text-copy/50",
      selectedTrue:"border-b-2 border-primary text-primary",
      selectedFalse:"hover:text-primary"}
  }
  
    const renderLinks = useCallback(
      ({ label, link }: MenuItem, idx: number) => {

        const isSelect = getFristPieceFromLink(pathname) === link;
  
        return (
          <Link
            href={link}
            key={idx}
            className={`${style.generic} ${
              isSelect
                ? style.selectedTrue
                : style.selectedFalse
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

