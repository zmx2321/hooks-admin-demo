import { useState } from 'react';

const Demo3 = () => {
	const [counts, setCounts] = useState(0);

	const increment = () => {
		setCounts(counts + 1);
	};

	const decrement = () => {
		setCounts(counts - 1);
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
