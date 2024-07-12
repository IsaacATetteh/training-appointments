import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero,  from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Info from "./components/Info";
import Map from "./components/Map";
import Pricing from "./components/Pricing";
import Partnerships from "./components/Partnerships";
import { useContext } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Info/>
      <Testimonials />
      <Map/>
      <Pricing/>
      <Partnerships/>
    </div>
  );
}
