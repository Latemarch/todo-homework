import React, { useImperativeHandle, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { IIsModal, IStates, updateModal } from "../redux/slices/modalSlice";
import { IToDo } from "../utils/firebase";
import useToDo from "../hooks/useToDo";

const defaultToDo = {
	id: "",
	createdAt: 0,
	title: "",
	body: "",
	isCompleted: false,
};

const inputStyle = "bg-gray-200 border-b border-zinc-500 focus:outline-none";

export default function Input() {
	const { whichModal, toDo: prevToDo } = useSelector<IStates>(
		(s) => s.modal
	) as IIsModal;
	const dispatch = useDispatch();
	const { addToDo, updateToDo } = useToDo();

	const initialToDo =
		prevToDo && whichModal === "Update" ? prevToDo : defaultToDo;
	const [toDo, setToDo] = useState<IToDo>(initialToDo);

	const handleInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const { name, value } = e.target;
		if (name === "body" && value.length > 70) return;
		setToDo({ ...toDo, [name]: value });
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const name = e.currentTarget.name;
		if (name === "Add") {
			addToDo.mutate(toDo);
		} else if (name === "Update") {
			updateToDo.mutate(toDo);
		}
		dispatch(updateModal({ whichModal: "", toDo: undefined }));
	};
	return (
		<div className="flex w-full p-8 pb-4 text-black flex-col space-y-4">
			<div className="flex flex-col">
				To Do:
				<input
					className={inputStyle} //
					name="title"
					value={toDo.title}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col">
				Detail:
				<textarea
					className={`${inputStyle} ring ring-zinc-500/50 focus:outline-zinc-500/50 mt-1`} //
					name="body"
					value={toDo.body}
					onChange={handleInput}
				/>
				<p>{`${toDo.body.length}/70`}</p>
			</div>
			<div className="flex justify-end w-full">
				<Button name={whichModal} onClick={handleClick} />
				<Button name={"Cancle"} onClick={handleClick} />
			</div>
		</div>
	);
}
