import { useSelector } from "react-redux";
import { RootState } from "../store";

export function TodoList() {
	const todos = useSelector((state: RootState) => {
		return state.todo;
	});

	return (
		<ul>
			{todos.map((todo, index) => (
				<li key={index}>{todo}</li>
			))}
		</ul>
	);
}