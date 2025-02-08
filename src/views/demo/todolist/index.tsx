import { useState } from "react";

import AddToDo from "./components/AddToDo";
import ToDoFilter from "./components/ToDoFilter";
import ToDoList from "./components/ToDoList";
import TodoItem from "./components/TodoItem";

import { Todo } from "./types";

import "./index.less";

const Home = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [filter, setFilter] = useState<string>('all')

	const addTodo = (text: string) => {
		const newToDo = {
			id: Math.random(),
			text,
			completed: false
		}

		setTodos([...todos, newToDo])
	}

	const deleteTodo = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number) => {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))
	}

	const getFilteredTodos = () => {
		switch (filter) {
			case 'active':
				return todos.filter(todo => !todo.completed)
			case 'completed':
				return todos.filter(todo => todo.completed)
			default:
				return todos
		}
	}

	return (
		<section className="todolist">
			<h1>ToDoList</h1>
			<AddToDo addTodo={addTodo} />
			<ToDoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
			<ToDoFilter setFilter={setFilter} />
		</section>
	);
};

export default Home;