import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link from next/link

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
        <Image src="/DST2.png" alt="logo" width={180} height={80} />
        <ul className="hidden md:flex gap-7">
          {menu.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button>Book now</Button>
    </nav>
  );
};

export default Navbar;
