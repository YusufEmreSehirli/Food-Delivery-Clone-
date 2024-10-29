import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestCard from "../components/RestCard";
import { getRestaurants } from "../redux/actions/restaurantActions";
import Container from "../components/Container";

const Main = () => {
  //store 'daki reducera abone olma (restourant)
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );

  // Dispatch kurulum
  const dispatch = useDispatch();

  //bileşen ekrana basıldığında api isteği at ve veriler
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">Tüm Restorantlar</h1>

      <div className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error msg={error} />
        ) : (
          restaurants.map((rest) => <RestCard res={rest.id} data={rest} />)
        )}
      </div>
    </Container>
  );
};

export default Main;
