import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "About",
      path: "/",
    },
    {
      id: 2,
      name: "Testimonials",
      path: "/",
    },
    {
      id: 3,
      name: "Contact me",
      path: "/",
    },
  ];
  return (
    <nav className="flex items-center justify-between p-4 shadow-lg">
      <div className="flex gap-10 items-center">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="hidden md:flex gap-7">
          {menu.map((item, index) => (
            <li key={index} className="hover:text-primary">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <Button className="">Book now</Button>
    </nav>
  );
};

export default Navbar;
