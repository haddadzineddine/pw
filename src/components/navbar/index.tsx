"use client";

import Link from "next/link";
import { navbarLinks } from "./navbar-helpers";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { cn } from "@/utils/tailwind-utils";


export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={cn("flex flex-col justify-between items-start py-6 px-8 text-white")}>
      <div className={cn("flex items-center w-full justify-between")}>

        <div>
          Logo
        </div>

        <ul className={cn("md:flex hidden items-center space-x-8")}>

          {
            navbarLinks.map((link) => (
              <li key={link.href} className={cn("cursor-pointer hover:opacity-75")}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>

        <div className={cn("md:hidden cursor-pointer")} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen
              ? <IoMdClose className={cn("h-6 w-6")} />
              : <HiMenu className={cn("h-6 w-6")} />
          }
        </div>

      </div>

      {
        isMenuOpen && (
          <ul className={cn("md:hidden flex flex-col items-start space-y-8 mt-8 text-sm")}>
            {
              navbarLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        )
      }

    </nav>
  );
}