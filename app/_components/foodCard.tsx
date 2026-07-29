import fingerFoodImg from "@/public/finger-food.jpg";
import Image from "next/image";


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@base-ui/react";
import { Plus } from "lucide-react";

export default function FoodCard() {
  return (
    <Card className="flex p-4">
      <div className="relative">
        <Image alt="finger food" src={fingerFoodImg} />
        <Button
          className={"absolute bottom-5 right-5 bg-white rounded-full p-3.5"}
        >
          <Plus />
        </Button>
      </div>
      <div className="">
        <h1>Finger Food</h1>
        <CardDescription>
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </CardDescription>
      </div>
    </Card>
  );
}
