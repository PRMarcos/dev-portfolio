"use client"

import { useCallback, useEffect, useState } from "react";

import { layout_MenuLinks } from "@/site-data"
import { MenuLinkList } from "./MenuLinkList";
import { MenuLinkListSideBar } from "./MenuLinkListSideBar";
import { HamburgerMenu } from "./HamburgerMenu"
import { SiteSearch } from "./SiteSearch";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import SocialMedia from "@/components/SocialMediaBtn";

import {
  homePage_SocialMediaLinks,
} from "@/site-data"


export default function Menu({ className }: { className?: string}) {
  const [menuState, setmenuState] = useState(false);
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState(true);


  const renderHambMenu = useCallback(
    () => (
      HamburgerMenu({ active: menuState, action: () => setmenuState(!menuState) })
    ),
    [menuState]
  );

  useEffect(() => {
   
    if (theme) document.documentElement.classList.replace("dark","light")
      else document.documentElement.classList.replace("light","dark")
    
  }, [theme]);


  return (
    <header className={`flex my-6 h-9 ${className} `}>
      <div className="flex w-full justify-between flex-row-reverse sm:flex-row ">
        <div className="hidden sm:flex">
          <MenuLinkList className="flex items-center flex-row gap-4 " linkList={layout_MenuLinks} renderCol={false} />
        </div>
          <div className="flex gap-4 items-center">
            <LanguageToggle lang={language} action={()=>setLanguage(!language)} />
            <ThemeToggle light={theme} action={()=> setTheme(!theme)}/>
            <SiteSearch />
            <div className="flex sm:hidden self-end relative">

              {renderHambMenu()}



              <div className={menuState?"fixed z-10 right-0 left-0 top-0 bottom-0":"hidden"} onClick={() => setmenuState(false)}>
              </div>
      
              <div
                className={`z-10 flex bg-background flex-col shadow-lg p-3 py-28 pb-36 gap-10 fixed w-64 h-screen top-0 -right-[256px] rounded-s-2xl transition-all duration-300 transform ease-in-out ${menuState && "-translate-x-full"
                  }`}
              >
                <MenuLinkListSideBar  className="flex text-center flex-col gap-4 px-8" linkList={layout_MenuLinks} renderCol={true} />
                
                <div className="flex flex-row justify-around px-8">

                  {homePage_SocialMediaLinks.map(function (item, idx) {
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
