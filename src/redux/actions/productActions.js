import api from "../../utils/api";
import Actions from "../reducers/actionTypes";

// id'den yola çıkarak hem restoranın hem de restoranın ürünlerini verilerini api'dan alıp reducer' aktaracak asenkron thunk aksiyonu yazalım
export const getDataByRestId = (id) => async (dispatch) => {
  dispatch({ type: Actions.PROD_LOADING });

  // restoranın bilgilerini veriyor
  const req1 = api.get(`/restaurants/${id}`);
  //ürün bilgileri verisi
  const req2 = api.get(`/products?restaurantId=${id} `);

  try {
    //iki farklı api isteğini aynı adan atarsak veriyi daha hızlı yansıtabiliriz.
    const responses = await Promise.all([req1, req2]);

    //apiden veriler başarıyla gelirse tetiklenecek aksiyonlar
    dispatch({ type: Actions.PROD_SUCCESS, payload: responses });
  } catch (err) {
    // apiden veriler gelmezse
    dispatch({ type: Actions.PROD_ERROR, payload: err.message });
  }
};
