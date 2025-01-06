"use server";

import { getDbConnection } from "@/config/db";

// CREATE TABLE Stock(
//   Stock_ID INT PRIMARY KEY IDENTITY(1,1),
//   Product_Name VARCHAR(100) NOT NULL,
//   Price DECIMAL(10, 2),
//   Quantity INT DEFAULT 0,
//   Expire_Date DATE,
//   Supplier_ID INT,
//   FOREIGN KEY(Supplier_ID) REFERENCES Supplier(Supplier_ID)
// );

export interface Stock {
  Stock_ID?: number;
  Product_Name: string;
  Price: number;
  Quantity: number;
  Expire_Date: Date;
  Supplier_ID: number;
}

export async function getStocks(): Promise<Stock[]> {
  const pool = await getDbConnection();

  const result = await pool.request().query("SELECT * FROM Stock");

  return result.recordset as Stock[];
}

export async function createStock(stock: Stock): Promise<Stock> {
  const pool = await getDbConnection();

  const result = await pool
    .request()
    .input("Product_Name", stock.Product_Name)
    .input("Price", stock.Price)
    .input("Quantity", stock.Quantity)
    .input("Expire_Date", stock.Expire_Date)
    .input("Supplier_ID", stock.Supplier_ID)
    .query(
      `INSERT INTO Stock (Product_Name, Price, Quantity, Expire_Date, Supplier_ID)
       VALUES (@Product_Name, @Price, @Quantity, @Expire_Date, @Supplier_ID)`,
    );

  return result.recordset as Stock;
}

// CREATE TABLE Supplier(
//   Supplier_ID INT PRIMARY KEY IDENTITY(1,1),
//   Supplier_Name VARCHAR(100) NOT NULL,
//   Category VARCHAR(50),
//   Contact_Details TEXT,
//   SupplierContact_No VARCHAR(15) UNIQUE
// );

export interface Supplier {
  Supplier_ID?: number;
  Supplier_Name: string;
  Category: string;
  Contact_Details: string;
  SupplierContact_No: string;
}

export async function getSuppliers(): Promise<Supplier[]> {
  const pool = await getDbConnection();

  const result = await pool.request().query("SELECT * FROM Supplier");

  return result.recordset as Supplier[];
}

export async function createSupplier(supplier: Supplier): Promise<Supplier> {
  const pool = await getDbConnection();

  const result = await pool
    .request()
    .input("Supplier_Name", supplier.Supplier_Name)
    .input("Category", supplier.Category)
    .input("Contact_Details", supplier.Contact_Details)
    .input("SupplierContact_No", supplier.SupplierContact_No)
    .query(
      `INSERT INTO Supplier (Supplier_Name, Category, Contact_Details, SupplierContact_No)
       VALUES (@Supplier_Name, @Category, @Contact_Details, @SupplierContact_No)`,
    );

  return result.recordset as Supplier;
}
