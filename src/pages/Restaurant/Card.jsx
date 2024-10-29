import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../../redux/actions/cartActions";

const Card = ({ product, restName }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAdd = () => {
    //zaten sepetteyse
    if (found) {
      dispatch(updateItem(found.id, found.amount + 1));
    } else {
      dispatch(addToBasket(product, restName));
    }
  };

  const found = cart.find((i) => i.productId === product.id);
  console.log(found);

  return (
    <div
      className="card border shadow justify-between p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] 
      cursor-pointer transition duration-300
    "
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-gray-500">{product.desc}</p>
        </div>
        <p className="text-lg font-semibold"> {product.price} ₺ </p>
      </div>

      {/* foto */}
      <div className="w-[115px ] h-[115px] relative">
        <img className=" rounded-md w-full h-full" src={product.photo} />

        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 transition 
        w-6 h-6 grid place-items-center hover:scale-[1.02]"
        >
          {found ? (
            <span className="font-bold">{found.amount} </span>
          ) : (
            <FaPlus className="text-lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
