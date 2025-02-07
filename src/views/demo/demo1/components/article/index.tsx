import { Fragment } from "react";

import Detail from './Detail'
import './index.css'

// 文章组件
// 父组件传值给子组件，子组件通过props接收
const Article = (props) => {
    return (
        <>
            <div className="article_wrap">
                <div className="article_title">{props.title}</div>
                {
                    props.detailData ?
                        <Detail content={props.detailData.content} active={props.detailData.active} /> :
                        <Fragment>
                            <div className="article_content">{props.content}</div>
                            <div className="article_status">{props.active ? '已发布' : '未发布'}</div>
                            <div className="article_footer">文章页眉</div>
                        </Fragment>

                }
            </div>
        </>
    )
}

export default Article;