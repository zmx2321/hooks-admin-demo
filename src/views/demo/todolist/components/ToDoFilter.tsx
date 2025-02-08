import { Fragment } from "react";

const ToDoFilter = ({ setFilter }: any) => {
	return (
		<Fragment>
			<button onClick={() => setFilter("all")}>All</button>
			<button onClick={() => setFilter("active")}>Active</button>
			<button onClick={() => setFilter("completed")}>Completed</button>
		</Fragment>
	);
};

export default ToDoFilter;
