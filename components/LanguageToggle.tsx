import { MouseEventHandler } from "react";
import {BrFlagIcon, UsFlagIcon} from "./flags"


export function LanguageToggle({lang,action}:{lang?:boolean,action?:MouseEventHandler}){

    return (
      <button
        onClick={action}
        className="w-8 h-8"
      >
        <div >
            {lang ? UsFlagIcon: BrFlagIcon}
            </div>
      </button>
    );
  };