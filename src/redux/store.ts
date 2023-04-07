import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";

export default configureStore({
	reducer: { modal: modalReducer },
});
