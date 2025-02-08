import { createContext } from 'react';

import Heading from './Heading.tsx';
import Section from './Section.tsx';
import ToolBar from './ToolBar.tsx';

// light是默认值，当Consumer向上都找不到对应的provide时显示
// 父组件定义createContext,并供出,设置默认值
export const MyContext = createContext({ name: 'light' });

// 定义一个createContext, 并对外供出
export const levelContext = createContext(0);

const Demo2 = () => {
	return (
		<Section>
			<Heading>主标题</Heading>
			<Section>
				<Heading>副标题</Heading>
				<Heading>副标题</Heading>
				<Heading>副标题</Heading>
				<Section>
					<Heading>子标题</Heading>
					<Heading>子标题</Heading>
					<Heading>子标题</Heading>
					<Section>
						<Heading>子子标题</Heading>
						<Heading>子子标题</Heading>
						<Heading>子子标题</Heading>
					</Section>
				</Section>
			</Section>

			{/* //Provider组件接收一个value属性，此处传入一个带有name属性的对象 */}
			{/* 这里传一个自己需要跨组件传的值 */}
			<MyContext.Provider value={{ name: `context's value is string!` }}>
				{/*这里写后面要进行包裹的子组件,此处先行导入后续需要消费context的组件*/}
				{/* 子组件中可以接收到createContext所传的所有值 */}
				<ToolBar />
			</MyContext.Provider>
		</Section>
	);
};

export default Demo2;
