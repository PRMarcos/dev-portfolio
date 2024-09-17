"use client"

import { useCallback, useState } from "react";

import {homePage_MenuLinks} from "@/site-data"
import { homePage_CallToAction } from "@/site-data";
import { ButtonCTA } from "./ButtonCTA";
import { MenuLinkList } from "./MenuLinkList";
import {HamburgerMenu} from "./HamburgerMenu"



export default function Menu() {
  const [menuState, setmenuState] = useState(false);

  const renderHambMenu = useCallback(
    () => (
      HamburgerMenu({active:menuState,action:()=>setmenuState(!menuState)})
    ),
    [menuState]
  );

  return (
    <section className="flex py-6 ">
      <div className="flex w-full flex-row-reverse	">
        <div className="hidden sm:flex justify-between w-full ">
          <MenuLinkList linkList={homePage_MenuLinks} renderCol={false} />
          <ButtonCTA link={homePage_CallToAction.link} 
                     label={homePage_CallToAction.label} 
                      Icon={homePage_CallToAction.icon} />
        </div>
        <div className="flex sm:hidden self-end ">

            {renderHambMenu()}

          <div
            className={`flex flex-col z-10 shadow-lg p-3 py-28 pb-36 gap-10 fixed w-64 h-screen bg-white top-0 -right-[254px] rounded-s-2xl transition-all duration-300 transform ease-in-out ${
              menuState && "-translate-x-full"
            }`}
          >
            <MenuLinkList linkList={homePage_MenuLinks} renderCol={true} />
            <ButtonCTA link={homePage_CallToAction.link} 
                     label={homePage_CallToAction.label} 
                      Icon={homePage_CallToAction.icon} />
          </div>
        </div>
      </div>
    </section>
  );
}
