import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataByRestId } from "../../redux/actions/productActions";
import ProdDetail from "./ProdDetail";
import RestaurantDetail from "./RestaurantDetail";

const Index = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  //bileşen ekrana basıldığında id'den yola çıkarak restoran ve ürünlerin bilgilerini api'dan al reducera gönder
  useEffect(() => {
    dispatch(getDataByRestId(id));
  }, []);
  return (
    <div>
      <div className="shadow">
        <Container>
          <RestaurantDetail />
        </Container>
      </div>

      <Container>
        <ProdDetail />
      </Container>
    </div>
  );
};

export default Index;
