import { useState, useRef, useEffect } from 'react';
import Child from './child'

const Demo3 = () => {
	const [counts, setCounts] = useState(0);
	const prevRef = useRef();
	const refInput = useRef<HTMLInputElement>(null);
	const refChild = useRef();

	const increment = () => {
		console.log(prevRef)
		prevRef.current = counts;
		setCounts(counts + 1);
	};

	const decrement = () => {
		console.log(refInput)
		// 获取焦点
		refInput.current.focus();
		setCounts(counts - 1);

		refChild.current?.testMed();
	};

	// react为了判断是不是纯函数(纯函数没有副作用,每次输入都有相同的输出),所以会先执行useEffect,然后再执行函数组件
	useEffect(() => {
		console.log('useEffect');
	}, [counts]);  // 空数组表示只执行一次,counts表示当counts改变时执行

	const testEffect = () => {
		console.log('testEffect');
	}

	return (
		<section className="demo3">
			<input type="text" ref={refInput} />
			<button onClick={decrement}>-</button>
			<span>{counts}</span>
			<button onClick={increment}>+</button>
			<span>上次的值: {prevRef.current}</span>
			<Child ref={refChild} />
			<button onClick={testEffect}>测试副作用函数</button>
		</section>
	);
};

export default Demo3;
