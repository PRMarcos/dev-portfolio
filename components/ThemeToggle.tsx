import { MouseEventHandler } from "react";
 
import { MdSunny  } from "react-icons/md";
import { LuMoonStar  } from "react-icons/lu";


export function ThemeToggle({light,action}:{light?:boolean, action?:MouseEventHandler}){

    return (
      <button
        onClick={action}
        className="flex gap-4"
      >
       {
        light?
        <MdSunny className="w-8 h-8" /> 
        :
       <LuMoonStar className="w-8 h-8" />
       }
      </button>
    );
  };