import { Fragment } from "react";

const Detail = (props) => {
    return (
        <Fragment>
            <div className="article_content">{props.content}</div>
            <div className="article_status">{props.active ? '已发布' : '未发布'}</div>
            <div className="article_footer">文章页眉</div>
        </Fragment>
    )
}

export default Detail;