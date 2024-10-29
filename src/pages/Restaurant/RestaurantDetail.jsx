import { useSelector } from "react-redux";
import Loader from "./../../components/Loader";
import Error from "./../../components/Error";
import { FaArrowDown, FaRegClock, FaStar } from "react-icons/fa";
const RestaurantDetail = () => {
  //reducer a abone olma
  const { isLoading, error, restaurant, products } = useSelector(
    (store) => store.product
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        restaurant && (
          <div className="flex gap-5">
            <img
              className="w-[150px] max-md:w-[100px] rounded"
              src={restaurant.photo}
            />
            <div className="flex flex-col justify-between">
              <p className="flex gap-5 ">
                <span className="flex items-center gap-2">
                  <FaArrowDown className="text-red-500" /> min{" "}
                  {restaurant.minPrice} TL
                </span>
                <span className=" text-red-500 items-center gap-2 flex">
                  {" "}
                  <FaRegClock /> {restaurant.estimatedDelivery} dak.
                </span>
              </p>
              <h1 className="md:text-3xl text-2xl font-semibold">
                {restaurant.name}
              </h1>
              <p className="flex items-center gap-2">
                <FaStar className="text-red-500" />
                {restaurant.rating}
                <button className="rounded text-red-500 font-semibold p-2 hover:bg-red-100 transition">
                  Yorumları Gör
                </button>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RestaurantDetail;
