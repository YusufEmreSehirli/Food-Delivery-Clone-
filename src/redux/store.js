import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});

// applyMiddleware herhangi bir arayazılımı
// redux'a dahil etmeye yararbiz burada thunk arayazılımını dahil etmek için kullandık.
// artık thunk'ın asenkron aksiyonlarını yazabileceğiz.
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
