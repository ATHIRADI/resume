"use client";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "service",
    path: "/service",
  },
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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTitle>
        <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
      </SheetTitle>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <Link href="/">
          <h1 className="text-2xl font-semibold mt-32 mb-40 text-center">
            Arun<span className="text-accent">Kumar</span>
          </h1>
        </Link>

        <nav className="flex gap-8 flex-col justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <span
                  className={`${
                    pathname === link.path &&
                    "text-accent border-b-2 border-accent"
                  } capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
