const TodoItem = ({ todo, toggleTodo, deleteTodo }: any) => {
	return (
		<li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			{todo.text}
			<button onClick={() => toggleTodo(todo.id)}>Toggle</button>
			<button onClick={() => deleteTodo(todo.id)}>Delete</button>
		</li>
	);
};

export default TodoItem;
