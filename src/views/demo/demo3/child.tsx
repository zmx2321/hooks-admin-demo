import { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		/**
		 * 暴露给父组件的方法
		 */
		testMed: () => {
			console.log('testMed');
		}
	}))

	return (
		<section className="child">
			child
		</section>
	);
})

export default Child;
