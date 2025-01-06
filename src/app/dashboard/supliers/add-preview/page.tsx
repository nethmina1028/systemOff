"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createSupplier, Supplier } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  Supplier_Name: z.string(),
  Category: z.string(),
  Contact_Details: z.string(),
  SupplierContact_No: z.string(),
});

export default function AddSupplierPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Supplier_Name: "",
      Category: "",
      Contact_Details: "",
      SupplierContact_No: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supplier: Supplier = {
      ...values,
    };

    try {
      await createSupplier(supplier);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Supplier_Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier Name</FormLabel>
              <FormControl>
                <Input placeholder="Supplier Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Contact_Details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Details</FormLabel>
              <FormControl>
                <Input placeholder="Contact Details" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="SupplierContact_No"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier Contact No</FormLabel>
              <FormControl>
                <Input placeholder="Supplier Contact No" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
