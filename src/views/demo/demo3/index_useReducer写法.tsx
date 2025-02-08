import { useReducer } from 'react';

const countReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			throw new Error();
	}
};

const Demo3 = () => {
	const [counts, dispatch] = useReducer(countReducer, 0);

	const increment = () => {
		// setCounts(counts + 1);
		dispatch({ type: 'increment' });
	};

	const decrement = () => {
		// setCounts(counts - 1);
		dispatch({ type: 'decrement' });
	};

	return (
		<section className="demo3">
			<button onClick={decrement}>-</button>
			<span>{counts}</span>
			<button onClick={increment}>+</button>
		</section>
	);
};

export default Demo3;
