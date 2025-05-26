import { Fragment, useState } from "react";

const Detail2 = (props) => {
    // console.log(props)

    const [status, setStatus] = useState(true);

    const setDataTo = () => {
        setStatus(!status)
        console.log(status)

        // 将拿到的值传给父组件的方法上，父组件通过props.onActive拿到值
        // react的自定义事件不需要像vue3那样需要用emits来声明
        // 直接在poops上声明即可
        // props.方法(参数)
        props.onActive(status)
        props.testSonToFather(status)
    }

    return (
        <Fragment>
            <hr />
            {/* <p style={{ marginTop: 6, marginBottom: 3 }} style={{ display: status ? 'block' : 'none' }}>list title</p> */}
            <b>{props.type}</b>
            <ul className="detail2">{props.children}</ul>
            {/* 子组件传值给父组件,和vue一样,先自定义事件 */}
            <button onClick={setDataTo}>使用自定义事件传值给detail1父组件</button>
            <hr />
        </Fragment >
    )
}

export default Detail2;