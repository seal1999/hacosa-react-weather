import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "../reducers";

const storeEnhancer = applyMiddleware(promise, ReduxThunk);
const store = createStore(rootReducer, storeEnhancer);

export default store;
