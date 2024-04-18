"use client"

import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/custom/data-table";

const data: Sales[] = [
  {
    id: "0",
    product: "Laptop",
    amount: 55000,
    quantity: 2,
    status: "success",
  },
  {
    id: "1",
    product: "PlayStation",
    amount: 95000,
    quantity: 7,
    status: "processing",
  },
  {
    id: "2",
    product: "Mobile",
    amount: 25000,
    quantity: 1,
    status: "success",
  },
  {
    id: "3",
    product: "Gaming PC",
    amount: 355000,
    quantity: 6,
    status: "success",
  },
  {
    id: "4",
    product: "Mac",
    amount: 155000,
    quantity: 3,
    status: "failed",
  },
  {
    id: "5",
    product: "Mobile Samsung Galaxy S23",
    amount: 75000,
    quantity: 4,
    status: "success",
  },
  {
    id: "0",
    product: "Laptop",
    amount: 55000,
    quantity: 2,
    status: "success",
  },
  {
    id: "1",
    product: "PlayStation",
    amount: 95000,
    quantity: 7,
    status: "processing",
  },
  {
    id: "2",
    product: "Mobile",
    amount: 25000,
    quantity: 1,
    status: "success",
  },
  {
    id: "3",
    product: "Gaming PC",
    amount: 355000,
    quantity: 6,
    status: "success",
  },
  {
    id: "4",
    product: "Mac",
    amount: 155000,
    quantity: 3,
    status: "failed",
  },
  {
    id: "5",
    product: "Mobile Samsung Galaxy S23",
    amount: 75000,
    quantity: 4,
    status: "success",
  },

]

export type Sales = {
  id: string
  product: string
  amount: number
  quantity: number
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Sales>[] = [
  {
   accessorKey: "product",
   header: "Product"
  },
  {
    accessorKey: "amount",
    header: "Amount"
   },
  {
    accessorKey: "quantity",
    header: "Quantity"
  },
  {
    accessorKey: "status",
    header: "Status"
  }
]

export function RecentSales() {
  return (
    <div className="w-full">
     <DataTable data={data} columns={columns}></DataTable>
    </div>
  )
}
 