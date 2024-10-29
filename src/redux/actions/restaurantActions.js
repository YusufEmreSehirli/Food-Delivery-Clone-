import api from "../../utils/api";
import Actions from "../reducers/actionTypes";
//!asenkron Thunk Aksiyonu
//Restoran verilerini alıp stora aktaran bir aksiyon fonksiyonu yazacaz
//normalde redux asenkron işlemler yapabilen aksiyonları kabul etmez
//bundan kaynaklı olarak bir thunk aksiyonu oluştururuz

//? Nasıl Tanımlarız ?
//bir Thunk fonksiyonu tanımlamak için bir fonksiyon içerisinde ikinci fonksiyonu return ederiz
//return edilen bu fonksiyon dispatchi parametre olarak alır.

const thunkFonkisyonu = () => {
  return (dispatch) => {
    //api istekleri burada atılır ve dispatch'i parametre olarak alır
  };
};

//? İlk örnek
//* 1) restoran verilerini alıp store'a aktaran bir fonksiyon yazıcaz
export const getRestaurants = () => {
  return (dispatch) => {
    dispatch({ type: Actions.REST_LOADING });

    api.get("/restaurants").then((res) =>
      dispatch({ type: Actions.REST_SUCCES, payload: res.data }).catch((err) =>
        dispatch({
          type: Actions.REST_ERROR,
          payload: err.message,
        })
      )
    );
  };
};
