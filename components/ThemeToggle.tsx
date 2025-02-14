import { MouseEventHandler } from "react";
 
import { MdSunny  } from "react-icons/md";
import { LuMoonStar  } from "react-icons/lu";


export function ThemeToggle({theme,action}:{theme?:string|undefined, action?:MouseEventHandler}){

    return (
      <button
        onClick={action}
        className="flex gap-4 text-copy"
      >
       {
        theme === "dark"?
        <MdSunny className="w-8 h-8" /> 
        :
       <LuMoonStar className="w-8 h-8" />
       }
      </button>
    );
  };