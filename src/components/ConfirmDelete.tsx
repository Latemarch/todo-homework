import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { IIsModal, IStates, updateModal } from "../redux/slices/modalSlice";
import useToDo from "../hooks/useToDo";

export default function ConfirmDelete() {
	const { toDo } = useSelector<IStates>((s) => s.modal) as IIsModal;
	const dispatch = useDispatch();
	const { removeToDo } = useToDo();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const name = e.currentTarget.name;
		console.log(name);
		if (name === "Delete") {
			toDo && removeToDo.mutate(toDo.id);
		}
		dispatch(updateModal({ whichModal: "", toDo: undefined }));
	};
	return (
		<div className="relative flex justify-center items-center w-full h-32">
			<div className="flex w-full justify-center text-black mb-4 ">
				Delete To Do ?
			</div>
			<div className="absolute flex inset-0 items-end justify-end mr-4 mb-2 text-zinc-500">
				<Button name={"Delete"} onClick={handleClick} />
				<Button name={"Cancle"} onClick={handleClick} />
			</div>
		</div>
	);
}
