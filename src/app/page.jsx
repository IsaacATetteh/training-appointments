import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero,  from "./components/Hero";
import ContactDetails from "./components/ContactDetails";
import Info from "./components/Info";
import Map from "./components/Map";
import { useContext } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <ContactDetails />
      <Info/>
      <Map/>
    </div>
  );
}
