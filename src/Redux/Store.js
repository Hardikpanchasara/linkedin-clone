import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer";
import {composeWithDevTools} from "@redux-devtools/extension"
import thunk from "redux-thunk";

let initialState = {}
const middleware = [thunk];
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store ;