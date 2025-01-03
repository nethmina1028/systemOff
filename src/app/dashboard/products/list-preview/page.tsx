"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  { id: "001", name: "Maliban Chick Bits", category: "Biscuits", price: "750.00", quantity: 50, expireDate: "2028-02-02" },
  { id: "002", name: "Chocolate biscuits", category: "Biscuits", price: "200.00", quantity: 20, expireDate: "2027-03-12" },
  { id: "003", name: "Vanillan Milk", category: "Drinks", price: "120.00", quantity: 100, expireDate: "2026-02-22" },
  { id: "004", name: "Mango juice", category: "Drinks", price: "220.00", quantity: 300, expireDate: "2025-02-12" },
  { id: "005", name: "Red rice", category: "Rice", price: "320.00", quantity: 100, expireDate: "2030-02-22" },
];

export default function ListPreviewPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="w-full mx-0 px-0">
      <h1 className="text-3xl font-semibold text-gray-700 mb-4 text-center">
        List of Products
      </h1>
      <div className="flex items-center justify-start mb-4 px-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 w-64 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
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
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell className="text-right">{product.expireDate}</TableCell>
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
