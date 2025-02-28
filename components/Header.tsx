"use client"

import {useState } from "react";
import { useTheme } from "next-themes";

import { Navigation } from "@/site-data"
import { NavigationLinks } from "./NavigationLinks";
import { HamburgerMenu } from "./HamburgerMenu"
import { SiteSearch } from "./SiteSearch";
import { ThemeToggle } from "./ThemeToggle";
import SocialMedia from "@/components/SocialMediaBtn";

import {
  SocialMediaLinks,
} from "@/site-data"
import Search from "./Search";


export default function Header({ className }: { className?: string}) {
  const [menuState, setmenuState] = useState(false);
  const {theme, setTheme} = useTheme();
  const [openSearch,setOpenSearch] = useState(false)


  function handleToggleTheme(){
    if(theme==="light") setTheme("dark")
      else setTheme("light")
  }


  return (
    <header className={`flex my-6 h-9 ${className} `}>
      <div className="flex w-full justify-between flex-row-reverse sm:flex-row ">
        <div className="hidden sm:flex">
          <NavigationLinks className="flex items-center flex-row gap-4 " linkList={Navigation} sidebar={false} />
        </div>
          <div className="flex gap-4 items-center">

          <div className={openSearch?" flex flex-col items-center justify-start pt-20 fixed bg-background z-10 right-0 left-0 top-0 bottom-0 select-none":"hidden"} >
          
           <Search action={() => setOpenSearch(false)}/>

          </div>

            <ThemeToggle theme={theme} action={handleToggleTheme}/>
            <SiteSearch  action={()=> setOpenSearch(!openSearch)}/>

            <div className="flex sm:hidden self-end relative">

              
              <HamburgerMenu active={menuState} action={() => setmenuState(!menuState)}/>

              

              <div className={menuState?"fixed z-10 right-0 left-0 top-0 bottom-0 select-none":"hidden"} onClick={() => setmenuState(false)}>
              </div>
      
              <div
                className={`z-10 flex bg-background flex-col shadow-lg p-3 py-28 pb-36 gap-10 fixed w-64 h-screen top-0 -right-[256px] rounded-s-2xl transition-all duration-300 transform ease-in-out ${menuState && "-translate-x-full"
                  }`}
              >
                <NavigationLinks  className="flex text-center flex-col gap-4 px-8" linkList={Navigation} sidebar={true} />
                
                <div className="flex flex-row justify-around px-8">

                  {SocialMediaLinks.map(function (item, idx) {
                      return (
                        <SocialMedia SocialIcon={item.SocialIcon} label={item.label} link={item.link} key={idx} />
                      )
                    })}
                </div>
              </div>
            </div>

          </div>
        </div>
    </header>
  );
}
