"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";


import {homePage_MenuLinks} from "@/site-data"

import {homePage_CallToAction} from "@/site-data"

type  MenuItem = { label:string, link:string };

const linesAnimation = [
  { style: "transform rotate-45 translate-y-2 animate-spin-slow" },
  { style: "duration-[0s] animate-fade-out invisible" },
  { style: "transform -rotate-45 -translate-y-2 animate-spin-fast" },
];

function Line({ style }: { style?: string | false }) {
  return <li className={`bg-black h-0.5 duration-300 w-6 ${style}`}> </li>;
}

function MenuList() {
  const pathname = usePathname();

  const renderLinks = useCallback(
    ({ label, link }: MenuItem, idx: number) => {
      const isSelect = String(pathname) === link;

      return (
        <Link
          href={link}
          key={idx}
          className={`text-sm font-medium uppercase text-gray-900 px-5 py-2 w-full flex justify-center rounded-full lg:w-auto ${
            isSelect
              ? "bg-[#9Ecfe4] !text-[#0582b6]"
              : "hover:bg-[#9ecfe4] hover:text-[#0582b6]"
          }`}
        >
          {label}
        </Link>
      );
    },
    [pathname]
  );
  return (
    <ul className="flex flex-col items-center lg:flex-row gap-2">
      {homePage_MenuLinks.map(renderLinks)}
    </ul>
  );
}

const ButtonDownload = () => {
  return (
    <Link
      href={homePage_CallToAction.link}
      className="flex items-center gap-2 text-sm font-medium uppercase text-white bg-blue-800  px-5 py-2 w-full justify-center rounded-full md:w-auto"
    >
      <span>{homePage_CallToAction.label}</span>
      <homePage_CallToAction.icon className="w-5 h-5" />
    </Link>
  );
};

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const renderLine = useCallback(
    ({ style }: { style: string }, idx: number) => (
      <Line style={toggle && style} key={idx} />
    ),
    [toggle]
  );

  return (
    <section className="flex px-9 py-6 items-center w-full justify-between">
      <div className="w-10 h-full"></div>
      <div className="flex items-center">
        <div className="hidden lg:flex gap-6">
          <MenuList />
          <ButtonDownload />
        </div>
        <div className="flex lg:hidden">
          <ul
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex flex-col gap-1.5 z-20"
          >
            {linesAnimation.map(renderLine)}
          </ul>
          <div
            className={`flex flex-col z-10 shadow-lg p-3 py-28 pb-36 gap-2 fixed w-64 h-screen bg-white top-0 -right-[254px] rounded-s-2xl transition-all duration-300 transform ease-in-out ${
              toggle && "-translate-x-full"
            }`}
          >
            <MenuList />
            <ButtonDownload />
          </div>
        </div>
      </div>
    </section>
  );
}
