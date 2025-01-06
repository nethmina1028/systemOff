"use client";

import React, { useState, useEffect } from "react";

import { getStocks, Stock, deleteStock } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ListPreviewPage() {
  const [products, setProducts] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

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
            <TableHead className="w-[100px]">Stock ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Expire Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredProducts.map((product, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{product.Stock_ID}</TableCell>
              <TableCell>{product.Product_Name}</TableCell>
              <TableCell>{product.Price}</TableCell>
              <TableCell>{product.Quantity}</TableCell>
              <TableCell>{product.Expire_Date.toISOString()}</TableCell>
              <TableCell className="text-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this product?") && product.Stock_ID) {
                      try {
                        deleteStock(product.Stock_ID).then(() => {
                          setProducts(products.filter((p) => p.Stock_ID !== product.Stock_ID));
                        });
                      }
                      catch (e) {
                        console.error(e);
                        toast({
                          title: "Error",
                          description: "An error occurred while deleting the product.",
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
  );
}
