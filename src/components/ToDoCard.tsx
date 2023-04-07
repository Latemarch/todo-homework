import React from "react";
import { IToDo } from "../utils/firebase";
import { BsPen, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateModal } from "../redux/slices/modalSlice";

interface IProps {
	toDo: IToDo;
}
export default function ToDoCard({ toDo }: IProps) {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(updateModal({ whichModal: "Delete", toDo }));
	};
	const handleUpdate = () => {
		dispatch(updateModal({ whichModal: "Update", toDo }));
	};
	return (
		<li className="flex flex-col mb-4">
			<div className="flex items-end justify-between ">
				<div className="flex sm:flex-col items-end sm:items-start ">
					<h2 className="text-2xl font-bold mr-4">{toDo.title}</h2>
					<p className="text-sm text-zinc-400 ">{formatDate(toDo.createdAt)}</p>
				</div>
				<div className="flex ">
					<BsPen
						className=" 
					flex ml-4 hover:text-teal-500 cursor-pointer"
						onClick={handleUpdate}
					/>
					<BsTrash
						className="text-zinc-400 flex ml-4 hover:text-teal-500 cursor-pointer"
						onClick={handleDelete}
					/>
				</div>
			</div>
			<span className="line-clamp-3 mt-2 sm:mt-1">{toDo.body}</span>
		</li>
	);
}

export function formatDate(timestamp: number) {
	const date = new Date(timestamp);

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const month = monthNames[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();

	const formattedDate = `${month} ${day}, ${year}`;

	return formattedDate;
}
