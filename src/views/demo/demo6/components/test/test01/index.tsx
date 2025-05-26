import { useState } from 'react';
import './index.less';
// 主界面组件
import Board from './components/Board';

// 游戏主组件（历史记录功能）
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]); // 游戏历史记录
    const [currentMove, setCurrentMove] = useState(0);  // 当前步数
    const currentSquares = history[currentMove];  // 当前棋盘状态
    const xIsNext = currentMove % 2 === 0;  // 判断当前玩家

    // 处理棋盘状态更新
    // 这里的nextSquares是从子组件拿过来的值
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);  // 更新历史记录
        setCurrentMove(nextHistory.length - 1);  // 跳转到最新记录
    }

    // 跳转到指定历史步骤
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    // 生成历史步骤按钮
    const moves = history.map((_, move) => {
        const desc = move > 0 ? `Go to move #${move}` : "Go to game start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    // render
    return (
        <div className="game">
            <div className="game-board">
                {/* onPlay是为了将子组件的状态传给父组件 */}
                <Board 
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>  {/* 历史记录列表 */}
            </div>
        </div>
    );
}
