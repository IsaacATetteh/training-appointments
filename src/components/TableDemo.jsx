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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>Click to go to location</TableCaption>
      <TableHeader>
        <TableHead className="w-[100px] text-xl">Training Locations</TableHead>
      </TableHeader>
      <TableBody>
        {locations.map((location) => (
          <TableRow key={location.description}>
            <TableCell className="font-medium">
              {location.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
