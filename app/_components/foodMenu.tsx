import FoodCard from "./foodCard";

export default function FoodMenu() {
  return (
    <div className="w-full flex flex-col md:p-22 md:gap-13.5">
      <div>
        <h1 className="pb-13.5 text-white ">Appetizers</h1>
        <div className="grid md:grid-cols-3 md:gap-9">
          <FoodCard id={0} />
          {/* <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard /> */}
        </div>
      </div>
      <div>
        <h1 className="pb-13.5 text-white ">Salads</h1>
        <div className="grid md:grid-cols-3 md:gap-9">
          {/* <FoodCard />
          <FoodCard />
          <FoodCard /> */}
        </div>
      </div>
      <div>
        <h1 className="pb-13.5 text-white ">Lunch favorites</h1>
        <div className="grid md:grid-cols-3 md:gap-9">
          {/* <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard /> */}
        </div>
      </div>
      <div>
        <h1 className="pb-13.5 text-white ">Salads</h1>
        <div className="grid md:grid-cols-3 md:gap-9">
          {/* <FoodCard />
          <FoodCard />
          <FoodCard /> */}
        </div>
      </div>
    </div>
  );
}
