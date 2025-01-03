"use client";

import React, { useState } from "react";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const products = [
  {
    id: "001",
    name: "Chathura Perera",
    category: "Food and Beverages Suppliers",
    contractDetails: "Mr. Dinesh Perera (Sales Manager), dinesh.perera@abcfoods.lk",
    contact: "0786452345",
    address: "No. 15, Queen Elizabeth Drive,Nuwara Eliya,Sri Lanka.",
  },
  {
    id: "002",
    name: "Nuwan Fernando",
    category: "Health and Personal Care Suppliers",
    contractDetails: "Ms. Anjali Fernando (Account Manager), anjali@cleanpro.lk",
    contact: "077421875",
    address: "No. 50, Mihintale Road,Anuradhapura,Sri Lanka.",
  },
  {
    id: "003",
    name: "Sanduni Senanayake",
    category: "Baby and Childcare Suppliers",
    contractDetails: "Mr. Kasun Jayasinghe (Operations Head), kasun@freshfarms.lk",
    contact: "0776845237",
    address: "No. 88, Main Street,Ratnapura,Sri Lanka.",
  },
  {
    id: "004",
    name: "Dilini Rathnayake",
    category: "Pet Care Suppliers",
    contractDetails: "Ms. Nadeeka Silva (Support Lead), nadeeka@techsolutions.lk",
    contact: "0753124988",
    address: "No. 23, Beach Road,Matara,Sri Lanka.",
  },
  {
    id: "005",
    name: "Nimal Perera",
    category: "Stationery Suppliers",
    contractDetails: "Ms. Sanduni Samarasinghe (Product Manager), sanduni@shine.lk",
    contact: "0724510642",
    address: "No. 67, Dockyard Road,Trincomalee,Sri Lanka.",
  },
];

export default function ListPreviewPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) => value.toString().toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="mx-0 w-full px-0">
      <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700">List of Supplier</h1>
      <div className="mb-4 flex items-center justify-start px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 rounded border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <Table>
          <TableCaption>A list of all Supplier.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Supplier_Id</TableHead>
              <TableHead>Supplier_Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Contract Details</TableHead>
              <TableHead>Supplier Contact No</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((Supplier) => (
              <TableRow key={Supplier.id}>
                <TableCell className="font-medium">{Supplier.id}</TableCell>
                <TableCell>{Supplier.name}</TableCell>
                <TableCell>{Supplier.category}</TableCell>
                <TableCell>{Supplier.contractDetails}</TableCell>
                <TableCell>{Supplier.contact}</TableCell>
                <TableCell>{Supplier.address}</TableCell>
              </TableRow>
            ))}
            {filteredProducts.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
