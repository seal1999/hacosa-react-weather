import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const storeEnhancer = composeWithDevTools(applyMiddleware(promise, ReduxThunk));
const store = createStore(rootReducer, storeEnhancer);

export default store;
