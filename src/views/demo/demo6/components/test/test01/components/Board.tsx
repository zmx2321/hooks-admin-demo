// 棋盘格子组件
import Square from './Square';

// 判断胜负的算法
function calculateWinner(squares) {
    const lines = [  // 所有可能的获胜组合
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 横向
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 纵向
        [0, 4, 8], [2, 4, 6]             // 斜线
    ];
    
    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];  // 返回获胜符号（X/O）
        }
    }
    return null;  // 无胜者
}

// 游戏棋盘主组件
function Board({ xIsNext, squares, onPlay }) {
    // 拿到父组件的值操作,并传值给父组件

    // 处理格子点击事件
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {  // 已有胜者或已填充则返回
            return;
        }
        const nextSquares = squares.slice();  // 创建棋盘副本
        nextSquares[i] = xIsNext ? 'X' : 'O'; // 根据回合设置 X/O
        onPlay(nextSquares);  // 传递新棋盘状态给父组件
    }

    // 计算并显示游戏状态
    const winner = calculateWinner(squares);
    let status = winner ? 
        `Winner: ${winner}` : 
        `Next player: ${xIsNext ? 'X' : 'O'}`;

    // 返回棋盘 JSX (dom结构)
    // 相当于就是定义了一个dom,返回给父组件  

    // 渲染 3x3 棋盘
    return (
        <>
            <div className="status">{status}</div>
            {[0, 3, 6].map(rowStart => (  // 生成三行棋盘
                <div className="board-row" key={rowStart}>
                    {/* onSquareClick是一个方法,当成一个函数传给子组件 */}
                    {[0, 1, 2].map(offset => (
                        <Square 
                            key={rowStart + offset}
                            value={squares[rowStart + offset]} 
                            onSquareClick={() => handleClick(rowStart + offset)}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}

export default Board;