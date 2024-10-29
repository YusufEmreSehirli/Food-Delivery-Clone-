import { MdDelete, MdDeliveryDining } from "react-icons/md";
import { FaRegClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const RestCard = ({ data }) => {
  console.log(data);
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="shadow rounden-lg overflow-hidden hover:bg-gray-100 cursor-pointer hover:shadow-lg"
    >
      <img className="w-full object-contain" src={data.photo} alt={data.name} />

      <div className="p-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{data.name}</h3>
          <p className="flex gap-2 items-center">
            <FaStar className="text-red-500" />
            {data.rating}
          </p>
        </div>
        <p className=" text-sm my-2 text-gray-500">
          <span>{data.minPrice} TL minimum</span>
        </p>

        <div className="flex gap-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <FaRegClock />
            {data.estimatedDelivery} dak.
          </p>

          {data.isDeliveryFree && (
            <p className="flex items-center gap-2 text-sm text-red-500 font-semibold">
              <MdDeliveryDining className="text-xl" />
              Ücretsiz
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestCard;