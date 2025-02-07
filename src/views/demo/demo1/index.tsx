import { Fragment, useState } from 'react';
import logo from './logo.svg';

import Article from './components/article/index';

const Demo1 = () => {
	/**
	 * 只读数据
	 */
	const imgStyle = {
		width: '100px',
		height: '100px',
		background: 'grey',
	}

	const imgData = {
		className: 'img_style',
		style: imgStyle,
	}

	const articleData = [
		{
			title: '标题1',
			detailData: {
				content: '内容1',
				active: true,
			},
		},
		{
			title: '标题2',
			detailData: {
				content: '内容2',
				active: true,
			},
		},
		{
			title: '标题3',
			detailData: {
				content: '内容3',
				active: true,
			},
		}
	]

	/**
	 * 带状态数据
	 */

	/**
	 * 自定义dom结构
	 */

	/**
	 * 事件处理
	 */

	/**
	 * render
	 */
	return (
		<section className="demo1">
			{/* jsx的属性展开语法 */}
			{/* <img src={logo} alt="" style={imgStyle} className="img_style" /> */}
			{/* jsx的展开语法 */}
			<img src={logo} alt="" {...imgData} />

			<Article title="标题1" content="内容1" />
			<Article title="标题2" content="内容2" active />
			<Article title="标题3" content="内容3" />

			<div className='last_article'>
				{articleData.map(item => <Article key={item.title} {...item} />)}
			</div>
		</section >
	);
};

export default Demo1;