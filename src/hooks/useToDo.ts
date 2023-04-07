import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	IToDo,
	addItem,
	getItems,
	removeItem,
	updateItem,
} from "../utils/firebase";
export default function useToDo() {
	const queryClient = useQueryClient();

	const toDoQuery = useQuery(["toDos"], () => getItems(), {
		staleTime: 1000 * 60 * 50,
	});

	const addToDo = useMutation((toDo: IToDo) => addItem(toDo), {
		onSuccess: (_, toDo) => {
			queryClient.invalidateQueries(["toDos"]);
			queryClient.invalidateQueries(["toDos", toDo.id]);
		},
	});

	const updateToDo = useMutation(
		(updatedToDo: IToDo) => updateItem(updatedToDo),
		{
			onSuccess: (_, updatedToDo) => {
				queryClient.invalidateQueries(["toDos"]);
				queryClient.invalidateQueries(["toDos", updatedToDo.id]);
			},
		}
	);
	const removeToDo = useMutation((id: string) => removeItem(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["toDos"]);
		},
	});

	return { toDoQuery, addToDo, updateToDo, removeToDo };
}
