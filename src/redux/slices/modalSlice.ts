import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToDo } from "../../utils/firebase";

export interface IIsModal {
	isModal: boolean;
	whichModal: string;
	toDo: IToDo | null;
}
export interface IStates {
	modal: IIsModal;
}
const initialState: IIsModal = {
	isModal: false,
	whichModal: "",
	toDo: null,
};
export const modalSlice = createSlice({
	name: "modal",
	initialState: initialState,
	reducers: {
		updateModal: (
			state,
			action: PayloadAction<{ toDo?: IToDo; whichModal?: string }>
		) => {
			state.isModal = !state.isModal;
			if (action.payload.whichModal) {
				state.whichModal = action.payload.whichModal;
			}
			if (action.payload.toDo) {
				state.toDo = action.payload.toDo;
			}
		},
	},
});

export const { updateModal } = modalSlice.actions;
export default modalSlice.reducer;
