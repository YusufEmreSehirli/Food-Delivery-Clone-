import { v4 } from "uuid";
import api from "../../utils/api";
import Actions from "../reducers/actionTypes";
import { toast } from "react-toastify";

// API'dan sepetteki verilerini alan reducer'a aktaran thunk asiyonu

export const getCart = () => (dispatch) => {
  dispatch({ type: Actions.CART_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: Actions.CART_SUCCESS, payload: res.data }))

    .catch((err) =>
      dispatch({ type: Actions.CART_ERROR, payload: err.message })
    );
};

//APİ'a ve reducer'da tutulan state'e yeni bir sepet elemanı ekler

export const addToBasket = (product, restName) => (dispatch) => {
  //a) sepete eklenecek olan ürünün bilgilerini belirleyeceğiz
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: restName,
    amount: 1,
  };

  console.log(newItem);
  //b) elemanı APİ'A kaydet
  api
    .post("/cart", newItem)
    .then(() => {
      // api'dan olumlu cevap gelirse reducar'a haber ver ve bildirim gönder
      //c) başarılı olursa reducer'a haber ver ve bildirim gönder
      dispatch({ type: Actions.ADD_ITEM, payload: newItem });

      toast.success(`${newItem.title} Sepete Eklendi`);
    })
    .catch(() => toast.error("Üzgünüz bir sorun oluştu"));
  //d) başarısız olursa bildirim gönder
};

// 3) Sepetteki elemanı güncelle(miktar arttırma ve azaltma )
export const updateItem = (id, newAmount) => (dispatch) => {
  //api'daki veriyi güncelle
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    //istek başarılı olursa reducer a haber ver
    .then((res) => {
      dispatch({
        type: Actions.UPDATE_ITEM,
        payload: res.data,
      });
      toast.info(`ürünün miktarı arttırıldı (${newAmount})`);
    })

    //başarısız olursa bildirim gönder
    .catch(() => toast.error("Üzgünüz bir sorun oluştu :("));
};

// elemanı sepetten kaldır
export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() => {
    dispatch({ type: Actions.DELETE_ITEM, payload: id });
    toast
      .warning("Ürün sepetten kaldırıldı")
      .catch(() => toast.error("üzgünüz bir sorun oluştu"));
  });
};
