"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "service",
  //   path: "/service",
  // },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "works",
    path: "/works",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path}>
            <span
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
