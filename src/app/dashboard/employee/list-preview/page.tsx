"use client";

import React, { useState } from "react";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const products = [
  {
    id: "001",
    name: "Tharushi Perera",
    contact: "0765428715",
    role: "Managing Director",
    date: "2028-05-02",
    salary: "200,000",
    address: "No. 123, Galle Road,Colombo 03,Sri Lanka.",
  },
  {
    id: "002",
    name: "Nadeeka Fernando",
    contact: "0784132784",
    role: "Human Resources Manager",
    date: "2028-05-04",
    salary: "150,000",
    address: "No. 45, Peradeniya Road,Kandy,Sri Lanka.",
  },
  {
    id: "003",
    name: "Suresh De Silva",
    contact: "0775491635",
    role: "Administrative Officer",
    date: "2028-05-06",
    salary: "250,000",
    address: "No. 45, Peradeniya Road,Kandy,Sri Lanka.",
  },
  {
    id: "004",
    name: "Chamindi Jayasinghe",
    contact: "0785317724",
    role: "Operations Manager",
    date: "2028-05-08",
    salary: "100,000",
    address: "No. 34, Lighthouse Street,Galle Fort,Sri Lanka.",
  },
  {
    id: "005",
    name: "Malith Karunaratne",
    contact: "0753149354",
    role: "Project Coordinator",
    date: "2028-05-10",
    salary: "120,000",
    address: "No. 89, Trincomalee Road,Batticaloa,Sri Lanka.",
  },
];

export default function ListPreviewPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) => value.toString().toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="mx-0 w-full px-0">
      <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700">List of Employee</h1>
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
          <TableCaption>A list of all Employee.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Employee_Id</TableHead>
              <TableHead>Employee_Name</TableHead>
              <TableHead>Contact_Number</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Hire Date</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.contact}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell className="text-right">{employee.date}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.address}</TableCell>
              </TableRow>
            ))}
            {filteredProducts.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
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
