import { useSelector } from "react-redux";
import { RootState } from "../store";

export function TodoList() {
	const todos = useSelector((state: RootState) => {
		return state.todo;
	});

	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	);
}
