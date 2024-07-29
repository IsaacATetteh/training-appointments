import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const locations = [
  {
    position: { lat: 56.140329460259395, lng: -3.9284515332014083 },
    description: "Airthrey Rd, Stirling, Scotland FK9 5JP",
    name: "Wallace High School",
  },
  {
    position: { lat: 56.11897131396835, lng: -3.912918855291855 },
    description: "Springkerse, Stirling FK7 7UJ",
    name: "Forthbank Performance Centre",
  },
  {
    position: { lat: 55.94529376098116, lng: -4.00248839884399 },
    description: "Dowanfield Road, Cumbernauld, G67 1LA",
    name: "Ravenswood Playing Fields",
  },
  {
    position: { lat: 55.93363615653315, lng: -3.290043525850762 },
    description: "208 Broomhouse Rd, Edinburgh EH12 9AD",
    name: "St Augustines 3G",
  },
];

export function TableDemo() {
  return (
    <div className="flex flex-col  h-full w-full text-center justify-center mt-10 md:mt-0">
      <h1 className=" font-bold md:text-3xl text-2xl text-center uppercase">
        Training Locations
      </h1>{" "}
      <div className="bg-[#004AAD] text-white text-center py-2 rounded-lg mt-8">
        <h2 className="text-xl font-bold uppercase">Stirling</h2>
      </div>
      <div className="flex flex-col py-2 location-item md:text-lg gap-2">
        <p className="">Wallace High School</p>
        <p>Forthbank Performance Center</p>
      </div>
      <div className="bg-[#004AAD] text-white text-center py-2 rounded-lg mt-8">
        <h2 className="text-xl font-bold uppercase">Edinburgh</h2>
      </div>
      <div className="py-2 location-item md:text-lg">
        <p>St Augustines 3G Pitch</p>
      </div>
      <div className="bg-[#004AAD] text-white text-center py-2 rounded-lg mt-8">
        <h2 className="text-xl font-bold uppercase">Cumbernauld</h2>
      </div>
      <div className="py-2 location-item md:text-lg">
        <p>Ravenswood Playing Fields</p>
      </div>
    </div>
  );
}
