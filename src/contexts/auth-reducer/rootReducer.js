import { combineReducers } from "redux";
import auth from "./auth";

const rootReducer = combineReducers({
    persist: auth,
});

export default rootReducer;
