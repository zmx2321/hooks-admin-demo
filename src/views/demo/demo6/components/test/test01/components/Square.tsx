// 棋盘格子组件
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}  {/* 显示 X/O 或空 */}
        </button>
    );
}

export default Square;