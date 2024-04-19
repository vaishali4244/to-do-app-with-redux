import { combineReducers } from "redux";
import  taskDetail  from "./taskReducer";

const rootReducer = combineReducers({
    task:taskDetail,
})


export default rootReducer;