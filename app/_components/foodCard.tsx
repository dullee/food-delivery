"use client";
import Image from "next/image";
import axios from "axios";

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

export interface FoodItem {
  foodName: string;
  price: number;
  image?: string;
  ingredients?: string;
  category: { categoryName: string };
}
export const allFoodObj: Record<number, FoodItem> = {
  0: {
    foodName: "Steak",
    price: 50,
    ingredients: "meat",
    image:
      "https://plus.unsplash.com/premium_photo-1723478557023-1f739ec06671?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: { categoryName: "meat" },
  },
};

async function addToCart(food_id: number) {
  try {
    const selectedFood = allFoodObj[food_id];

    if (!selectedFood) {
      console.error(`Food item with ID ${food_id} not found locally.`);
      return;
    }

    // 2. Use the spread operator (...) to send fields directly matching the Mongoose schema
    await axios.post("http://localhost:4000/api/foods", {
      ...selectedFood,
    });

    console.log("Food added successfully!");
  } catch (error: any) {
    const errorMsg =
      error.response?.data?.error || error.message || "Unknown error";
    console.log("Error:", errorMsg);
  }
}
interface FoodCardProps {
  id: number;
}
export default function FoodCard({ id }: FoodCardProps) {
  const food = allFoodObj[id];

  return (
    <Card className="flex p-4">
      <div className="relative">
        <Image
          alt="finger food"
          src={food.image || "/finger-food.png"}
          width={200}
          height={200}
        />
        <Button
          onClick={() => addToCart(id)}
          className={
            "absolute bottom-5 right-5 bg-white cursor-pointer rounded-full p-3.5"
          }
        >
          <Plus />
        </Button>
      </div>
      <div className="">
        <h1>{food.foodName}</h1>
        <CardDescription>{food.ingredients}</CardDescription>
      </div>
    </Card>
  );
}
