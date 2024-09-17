import { MouseEventHandler } from "react";

  function Line({ style }: { style?: string | false }) {
    return <li className={`bg-black h-0.5 duration-300 w-6 ${style}`}> </li>;
  }
  export function HamburgerMenu({active,action}:{active:boolean,action:MouseEventHandler}){

    return(
        <ul onClick={action} className={"flex py-[9px] flex-col gap-1.5 z-20"}>
            <Line style={active && "transform rotate-45 translate-y-2 animate-spin-slow"}/>
            <Line style={active && "duration-[0s] animate-fade-out invisible"}/>
            <Line style={active && "transform -rotate-45 -translate-y-2 animate-spin-fast"}/>
        </ul>
    )
  }