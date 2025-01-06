"use client";

import React, { useState, useEffect } from "react";

import { getStocks, Stock } from "@/app/actions";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ListPreviewPage() {
  const [products, setProducts] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStocks().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) => value.toString().toLowerCase().includes(searchQuery.toLowerCase())),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-0 px-0">
      <h1 className="text-3xl font-semibold text-gray-700 mb-4 text-center">List of Products</h1>
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
              <TableHead className="w-[100px]">Stock ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Expire Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{product.Stock_ID}</TableCell>
                <TableCell>{product.Product_Name}</TableCell>
                <TableCell>{product.Price}</TableCell>
                <TableCell>{product.Quantity}</TableCell>
                <TableCell className="text-right">{product.Expire_Date.toISOString()}</TableCell>
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
