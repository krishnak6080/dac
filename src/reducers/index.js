import { combineReducers } from "redux";
import fileUploadReducer from "./fileUploadReducer";

const reducers = combineReducers({ fileUploader: fileUploadReducer });

export default reducers;
