"use client";

import { Button } from "@/components/ui/button";
import { Plus, Tag, Sparkles } from "lucide-react";

type FoodMenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: "Available" | "Out of stock";
};

const categories = ["Appetizers", "Salads", "Pasta", "Desserts", "Beverages"];

const sampleMenu: FoodMenuItem[] = [
  {
    id: "F-101",
    name: "Grilled Ribeye Steak",
    category: "Main course",
    price: 42,
    status: "Available",
  },
  {
    id: "F-102",
    name: "Avocado Chicken Salad",
    category: "Salads",
    price: 18,
    status: "Available",
  },
  {
    id: "F-103",
    name: "Truffle Mushroom Pasta",
    category: "Pasta",
    price: 27,
    status: "Out of stock",
  },
  {
    id: "F-104",
    name: "Spicy Buffalo Wings",
    category: "Appetizers",
    price: 16,
    status: "Available",
  },
];

export default function AdminFoodMenu() {
  return (
    <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            New dishes & categories
          </p>
          <h1 className="text-3xl font-semibold text-gray-900">
            Add menu items faster
          </h1>
          <p className="max-w-2xl text-sm text-gray-600">
            Create categories and dishes with a clean admin workflow designed
            for fast updates.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="px-4 py-2 gap-2">
            <Tag className="h-4 w-4" /> Add category
          </Button>
          <Button className="px-4 py-2 gap-2">
            <Plus className="h-4 w-4" /> Add dish
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Categories
                </p>
                <h2 className="text-xl font-semibold text-gray-900">
                  Manage categories
                </h2>
              </div>
              <Button variant="outline" className="px-3 py-2">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Add new category
            </p>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Category name"
                className="w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm outline-none transition hover:border-gray-300 focus:border-black"
              />
              <Button className="w-full px-4 py-3">Create category</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-5">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Dish list
                </p>
                <h2 className="text-xl font-semibold text-gray-900">
                  Add new dishes
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <Sparkles className="h-4 w-4" /> Featured
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sampleMenu.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-3xl border border-gray-200 bg-slate-50 p-4 transition hover:border-black"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        item.status === "Available"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      ${item.price}
                    </span>
                    <Button variant="outline" className="px-3 py-2 text-xs">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Add new dish
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Dish name"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition hover:border-gray-300 focus:border-black"
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition hover:border-gray-300 focus:border-black"
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition hover:border-gray-300 focus:border-black"
              />
              <select className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition hover:border-gray-300 focus:border-black">
                <option>Available</option>
                <option>Out of stock</option>
              </select>
            </div>
            <Button className="mt-5 w-full px-4 py-3">Save dish</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
