import {
	child,
	get,
	getDatabase,
	ref,
	remove,
	set,
	update,
} from "firebase/database";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
	signOut,
	NextFn,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	authDomain: "blog-eba42.firebaseapp.com",
	// databaseURL: process.env.REACT_APP_FIREBASE_DB_UR,
	databaseURL:
		"https://blog-eba42-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	// projectId: "blog-eba42 ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();
const dbRef = ref(getDatabase(app));
export interface IToDo {
	id: string;
	createdAt: number;
	title: string;
	body: string;
	isCompleted: boolean;
}
export function addItem(todo: IToDo) {
	const id = uuid();
	return set(
		ref(database, `toDos/${id}`), //
		{
			...todo,
			id,
			createdAt: Date.now(),
		}
	);
}
export async function getItems() {
	const snapshot = await get(child(dbRef, "toDos"));
	if (snapshot.exists()) {
		const data: IToDo[] = Object.values(snapshot.val());
		return data;
	}
}

export async function updateItem(updatedToDo: IToDo) {
	return update(dbRef, { [`toDos/${updatedToDo.id}`]: updatedToDo });
}

export async function removeItem(id: string) {
	return remove(ref(database, `toDos/${id}`));
}
