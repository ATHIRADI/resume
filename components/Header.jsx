// import Link from "next/link";

import React from "react";
import MobileNav from "./MobileNav";
import { Nav } from "./Nav";
// import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-end items-center">
        {/* <Link href="/contact">
          <Button>Hire Me</Button>
        </Link> */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
