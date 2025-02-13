import { MouseEventHandler } from "react";
import { MdSearch } from "react-icons/md";


export function SiteSearch({action}:{action?:MouseEventHandler}){

    return (
      <button
        onClick={action}
        className=" text-copy"
      >
        <MdSearch className="w-8 h-8" />
      </button>
    );
  };