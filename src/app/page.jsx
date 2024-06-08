import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero,  from "./components/Hero";
import ContactDetails from "./components/ContactDetails";
export default function Home() {
  return (
    <div>
      <Hero />
      <ContactDetails />
    </div>
  );
}
