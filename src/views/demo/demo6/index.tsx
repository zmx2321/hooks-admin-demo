import { Fragment, useState } from 'react';

const Demo0 = () => {
	/**
	 * 只读数据
	 */
	const list = [
		{ id: 1, name: "test1" },
		{ id: 2, name: "test2" },
		{ id: 3, name: "test3" },
	]

	/**
	 * 带状态数据
	 */
	// const title = "vdefsdvs"
	// 一个用来读,一个用方法来改变数据
	const [title, setTitle] = useState("vdefsdvs")
	const [info, setInfo] = useState({
		name: "test",
		age: 18
	})
	const [myList, setMyList] = useState(list)

	/**
	 * 自定义dom结构
	 */
	/* const listCont = list.map((item) => {
	  return  <li key={item.id} id={item.id}>{item.name}</li>
	}) */
	const listCont = list.map((item) => (
		// 一个虚拟的标签，不会渲染到页面上
		<Fragment key={item.id}>
			<li id={item.id}>{item.name}</li>
			<hr />
		</Fragment>
	))

	/**
	 * 事件处理
	 */
	const handleClick = (e) => {
		console.log("click", e)

		setTitle("changed")

		// 必须得写全,是替换而不是合并,相当于 info = {......}
		setInfo({
			...info,
			name: "fdswfsd"
		})

		// 合并
		setMyList([...myList, { id: myList.length + 1, name: `test${myList.length + 1}` }])
	}

	const removeOne = (id) => {
		return (e) => {
			console.log("removeOne", id, e)
			// 匹配到当前id,删除
			setMyList(myList.filter(item => item.id !== id))
		}
	}

	/**
	 * render
	 */
	return (
		<section className="demo0">
			{title}
			<br />
			{info.name}
			{info.age}
			<ul>
				{listCont}
			</ul>
			<ul>
				{myList.map(item =>
					<li title='删除' style={{ cursor: 'pointer', color: '#f00' }} key={item.id} id={item.id} onClick={removeOne(item.id)}>{item.name}</li>
				)}
			</ul>
			<button onClick={handleClick}>click</button>
		</section >
	);
};

export default Demo0;