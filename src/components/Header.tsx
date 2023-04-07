import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { IIsModal, updateModal } from "../redux/slices/modalSlice";

export default function Header() {
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(updateModal({ whichModal: "Add" }));
	};
	return (
		<div className="w-full mb-10 flex justify-between items-end">
			<div>
				<h1 className="text-4xl">To Do List</h1>
				<p className="text-zinc-400">
					로그인은 구현하지 않아서 모두가 게시, 수정, 삭제가 가능.
				</p>
			</div>
			<Button name={"Add"} onClick={handleAdd} />
		</div>
	);
}
