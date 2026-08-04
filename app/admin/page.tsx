import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Truck } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";
import AdminOrderInfo,  from "../_components/adminOrderInfo";

import { ColumnDef } from "@tanstack/react-table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]

export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#F4F4F5]">
      <div className="max-w-360 flex w-full relative gap-6">
        <div className="max-w-51.25 flex bg-white h-screen w-full">
          <div className="fixed left-0 top-0 flex flex-col px-5 pt-9 gap-10">
            <div className="flex max-h-12">
              <Image alt="logo" width={165} height={44} src={"logoHDark.svg"} />
            </div>
            <div className="flex flex-col gap-6 items-center">
              <h1 className="flex gap-2.5 py-2 px-6">
                <LayoutDashboard /> Food menu
              </h1>
              <Button className={"py-2 px-6 gap-2.5 flex"}>
                <Truck />
                <h2 className="w-full">Orders</h2>
              </Button>
              <div></div>
            </div>
          </div>
        </div>
        <div className="mt-6 mr-10 w-full flex flex-col gap-6">
          <div className="ml-auto">Pf picture</div>
          <div>

            <AdminOrderInfo columns={columns} data={data}/>
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
