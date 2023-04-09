import React from "react";
import useToDo from "../hooks/useToDo";
import ToDoCard from "./ToDoCard";

export default function ToDoList() {
	const {
		toDoQuery: { data: ToDos, isLoading },
	} = useToDo();
	return (
		<ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
			{isLoading && <p className="text-2xl">isLoading...</p>}
			{ToDos &&
				ToDos.sort((a, b) => b.createdAt - a.createdAt).map((toDo) => (
					<ToDoCard key={toDo.id} toDo={toDo} />
				))}
		</ul>
	);
}
