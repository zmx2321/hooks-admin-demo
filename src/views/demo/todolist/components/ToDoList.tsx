import { ToDo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Array<ToDo>;
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

const ToDoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};

export default ToDoList;
