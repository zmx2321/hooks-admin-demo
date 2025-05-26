import { Fragment } from "react";
import Detail2 from "./Detail2";

const Detail = (props) => {
    const handleActive = (status) => {
        console.log('handleActive', status)
    }

    const testSonToFather = (status) => {
        console.log('testSonToFather', status)
    }

    return (
        <Fragment>
            <div className="article_content">{props.content}</div>
            <div className="article_status">{props.active ? '已发布' : '未发布'}</div>
            <div className="article_footer">文章页眉</div>

            {/* 子组件传值给父组件,父组件用一个方法接收 */}
            <Detail2 type="type1" status="1" onActive={handleActive} testSonToFather={testSonToFather}>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </Detail2>
            {/* 子组件传值给父组件,父组件用一个方法接收 */}
            <Detail2 type="type2" onActive={handleActive} testSonToFather={testSonToFather}>
                <li>list4</li>
                <li>list5</li>
                <li>list6</li>
            </Detail2>
        </Fragment>
    )
}

export default Detail;