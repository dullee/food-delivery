import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Truck } from "lucide-react";

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
            </div>
          </div>
        </div>
        <div className="mt-6 mr-10 w-full flex flex-col">
          <div className="ml-auto">ORders</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
