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
				<span className="text-zinc-400 w-4/5">
					로그인은 구현하지 않아서 모두가 게시, 수정, 삭제가 가능합니다.
					TanStack Query로 firebase의 데이터 관리함. 배포는 netlify. 간단한
					투두앱 구현이 목적이므로 카드를 클릭해서 들어가는 상세페이지는
					구현하지 않음. 기본 내용은 아무 글이나 가지고 붙여넣음
				</span>
			</div>
			<Button name={"Add"} onClick={handleAdd} />
		</div>
	);
}
