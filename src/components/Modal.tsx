import Input from "./Input";
import ConfirmDelete from "./ConfirmDelete";
import { IToDo } from "../utils/firebase";

interface IProps {
	whichModal: string;
}
export default function Modal({ whichModal }: IProps) {
	return (
		<>
			<div className="fixed inset-0 bg-zinc-700 opacity-50 z-40 justify-center items-center flex"></div>
			<div className="fixed inset-0 z-50 justify-center items-center flex">
				<div className="flex w-60 h-auto rounded-xl bg-gray-200">
					{whichModal === "Delete" ? <ConfirmDelete /> : <Input />}
				</div>
			</div>
		</>
	);
}
