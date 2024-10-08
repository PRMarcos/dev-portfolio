"use client"

import { useCallback, useState } from "react";

import { layout_MenuLinks } from "@/site-data"
import { sidebar_CallToAction } from "@/site-data";
import { ButtonCTA } from "./ButtonCTA";
import { MenuLinkList } from "./MenuLinkList";
import { HamburgerMenu } from "./HamburgerMenu"
import { SiteSearch } from "./SiteSearch";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";



export default function Menu({ className }: { className?: string }) {
  const [menuState, setmenuState] = useState(false);
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState(false);

  const renderHambMenu = useCallback(
    () => (
      HamburgerMenu({ active: menuState, action: () => setmenuState(!menuState) })
    ),
    [menuState]
  );



  return (
    <header className={`flex my-6 h-9 ${className} `}>
      <div className="flex w-full justify-between flex-row-reverse sm:flex-row ">
        <div className="hidden sm:flex">
          <MenuLinkList linkList={layout_MenuLinks} renderCol={false} />
        </div>
          <div className="flex gap-4 items-center">
            <LanguageToggle lang={language} action={()=>setLanguage(!language)} />
            <ThemeToggle light={theme} action={()=>setTheme(!theme)}/>
            <SiteSearch />
            <div className="flex sm:hidden self-end ">

              {renderHambMenu()}

              <div
                className={`flex flex-col z-10 shadow-lg p-3 py-28 pb-36 gap-10 fixed w-64 h-screen bg-white top-0 -right-[254px] rounded-s-2xl transition-all duration-300 transform ease-in-out ${menuState && "-translate-x-full"
                  }`}
              >
                <MenuLinkList linkList={layout_MenuLinks} renderCol={true} />
                <ButtonCTA link={sidebar_CallToAction.link}
                  label={sidebar_CallToAction.label}
                  Icon={sidebar_CallToAction.icon} />
              </div>
            </div>

          </div>
        </div>
    </header>
  );
}
