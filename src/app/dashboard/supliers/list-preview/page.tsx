"use client";

import React, { useState, useEffect } from "react";

import { getSuppliers, Supplier, deleteSupplier } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


export default function ListPreviewPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    getSuppliers().then((data) => {
      setSuppliers(data);
      setIsLoading(false);
    });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredSupplier = suppliers.filter((supplier) =>
    Object.values(supplier).some((value) => value.toString().toLowerCase().includes(searchQuery.toLowerCase())),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <Input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 p-2 w-64 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Table>
        <TableCaption>A list of all Products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Supplier ID</TableHead>
            <TableHead>Supplier Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Contact Details</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredSupplier.map((supplier, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{supplier.Supplier_ID}</TableCell>
              <TableCell>{supplier.Supplier_Name}</TableCell>
              <TableCell>{supplier.Category}</TableCell>
              <TableCell>{supplier.Contact_Details}</TableCell>
              <TableCell>{supplier.SupplierContact_No}</TableCell>
              <TableCell className="text-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this supplier?") && supplier.Supplier_ID) {
                      try {
                        deleteSupplier(supplier.Supplier_ID).then(() => {
                          setSuppliers(suppliers.filter((p) => p.Supplier_ID !== supplier.Supplier_ID));
                        });
                      }
                      catch (e) {
                        console.error(e);
                        toast({
                          title: "Error",
                          description: "An error occurred while deleting the supplier.",
                          variant: "destructive"
                        });
                      }
                    }
                  }}
                >
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {filteredSupplier.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No suppliers found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
