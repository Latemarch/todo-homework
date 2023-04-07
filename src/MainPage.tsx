import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
import { IIsModal, IStates } from "./redux/slices/modalSlice";

export default function MainPage() {
	const { isModal, whichModal } = useSelector<IStates>(
		(s) => s.modal
	) as IIsModal;

	return (
		<div className="w-full">
			<Header />
			<ToDoList />
			{isModal && <Modal whichModal={whichModal} />}
		</div>
	);
}
