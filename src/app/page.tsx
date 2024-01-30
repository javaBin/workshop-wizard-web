import { Table,   
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { workshops } from "./test/workshopData";
import Link from "next/link";

const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Oslo' };


export default function Home() {
  return (
    <main>
      <Table>
  <TableCaption>All workshops</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[220px]">Workshop</TableHead>
      <TableHead>Time</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-right"></TableHead>
    </TableRow>
  </TableHeader>
  {workshops
.map((Workshop) => ( 

  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{Workshop.name}</TableCell>
      <TableCell>{Workshop.startTime.toLocaleTimeString("no", timeOptions)} - {Workshop.endTime.toLocaleTimeString("no", timeOptions)}</TableCell>
      <TableCell>{Workshop.description}</TableCell>
      <TableCell className="text-right">
        <Link         
        href={`/workshop/${Workshop.slug}`} 
        key={Workshop._id} >
          <Button>Details</Button></Link>
        </TableCell>
    </TableRow>
  </TableBody>
       ))}
</Table>

    </main>
  );
}
