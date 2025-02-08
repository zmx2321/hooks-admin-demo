import { useState } from 'react';

interface AddToDoProps {
	addTodo: (text: string) => void
}

// 新建事项
const AddToDo = ({ addTodo }: AddToDoProps) => {
	const [text, setText] = useState<string>('')

	const handleAdd = () => {
		// console.log(text, text.trim())
		if (text.trim() === '') return

		// 将text添加到list中
		addTodo(text)
	}

	return (
		<section className="add_todo">
			{/* 输入框输入完,将值赋值给text */}
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
			<button onClick={handleAdd}>新建事项</button>
		</section>
	);
};

export default AddToDo;
