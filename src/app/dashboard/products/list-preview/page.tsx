import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
export default function listPreviewPage() {
    return <div>
        <Table>
  <TableCaption>A list of all Products.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Product_Id</TableHead>
      <TableHead>Product_Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead className="text-right">Expire Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">PRO001</TableCell>
      <TableCell>Maliban Chick Bits</TableCell>
      <TableCell>Biscuts</TableCell>
      <TableCell>Rs.750.00</TableCell>
      <TableCell>50</TableCell>
      <TableCell className="text-right">2028-02-12</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">PRO002</TableCell>
      <TableCell>Maliban Chick Bits</TableCell>
      <TableCell>Biscuts</TableCell>
      <TableCell>Rs.750.00</TableCell>
      <TableCell>50</TableCell>
      <TableCell className="text-right">2028-02-12</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">PRO003</TableCell>
      <TableCell>Maliban Chick Bits</TableCell>
      <TableCell>Biscuts</TableCell>
      <TableCell>Rs.750.00</TableCell>
      <TableCell>50</TableCell>
      <TableCell className="text-right">2028-02-12</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  }