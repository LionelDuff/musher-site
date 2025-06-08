"use client";

import * as React from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed z-1000 top-0 flex justify-center w-screen lg:h-40 h-30 header-mask shadow-lg">
      <div className="lg:flex hidden items-center justify-center w-9/10 h-55">
        <div className="flex items-center justify-center font-bold font-mono">
          <Button
            variant="link"
            effect="hoverUnderline"
            className="text-3xl cursor-pointer text-center hover:text-[#7c2e19] mr-6 duration-500"
          >
            <Link href={"/"}>Accueil</Link>
          </Button>
          <Button
            variant="link"
            effect="hoverUnderline"
            className="text-3xl cursor-pointer text-center hover:text-[#7c2e19] mr-6 duration-500"
          >
            <Link href={"/ete"}>Activités été</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center font-bold w-[200px] h-full">
          <Image
            src={"/twl_logo.jpg"}
            alt="Logo Triskel Wolf Lénada"
            width={200}
            height={200}
            className="rounded-full z-50 shadow-lg w-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center font-bold font-mono">
          <Button
            variant="link"
            effect="hoverUnderline"
            className="text-3xl cursor-pointer text-center ml-6 hover:text-[#7c2e19] duration-500"
          >
            <Link href={"/hiver"}>Activités hiver</Link>
          </Button>

          <Button
            variant="link"
            effect="hoverUnderline"
            className="text-3xl cursor-pointer text-center ml-6 hover:text-[#7c2e19] duration-500"
          >
            <Link href={"/contact"}>Contact</Link>
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="ml-8"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>

      <div className="flex items-center justify-center lg:hidden w-9/10 h-40">
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center justify-center font-bold h-full w-[150px]">
              <Image
                src={"/twl_logo.jpg"}
                alt="Logo Triskel Wolf Lénada"
                width={200}
                height={200}
                className="rounded-full z-50 shadow-lg w-full object-contain cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-center justify-center font-mono font-bold">
            <Button
              variant="link"
              effect="hoverUnderline"
              className="text-2xl cursor-pointer hover:text-[#7c2e19] duration-500"
            >
              <Link href={"/"}>Accueil</Link>
            </Button>

            <Button
              variant="link"
              effect="hoverUnderline"
              className="text-2xl cursor-pointer hover:text-[#7c2e19] duration-500 mt-4"
            >
              <Link href={"/ete"}>Activités été</Link>
            </Button>
            <Button
              variant="link"
              effect="hoverUnderline"
              className="text-2xl cursor-pointer hover:text-[#7c2e19] duration-500 mt-4"
            >
              <Link href={"/hiver"}>Activités hiver</Link>
            </Button>
            <Button
              variant="link"
              effect="hoverUnderline"
              className="text-2xl cursor-pointer hover:text-[#7c2e19] duration-500 mt-4"
            >
              <Link href={"/contact"}>Contact</Link>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="mt-4"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
