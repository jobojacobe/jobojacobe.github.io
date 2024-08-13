import { useState } from "react";

function Square({idValue, value, onSquareClick}) {
    
    return (
        <button
            id={idValue= idValue}
            className="square"
            onClick={onSquareClick}
        >
        {value}
        </button>
    );
}

export default function Board() {
    const [redIsNext, setRedIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(42).fill(null));
    let topOfColumn = null;

    function handleClick(i) {
        const columns = [
            [0, 7, 14, 21, 28, 35],
            [1, 8, 15, 22, 29, 36],
            [2, 9, 16, 23, 30, 37],
            [3, 10, 17, 24, 31, 38],
            [4, 11, 18, 25, 32, 39],
            [5, 12, 19, 26, 33, 40],
            [6, 13, 20, 27, 34, 41]
        ];
        const col = columns[i];

        for (let j = col.length - 1; j >= 0; j--) {
            if (calculateWinner(squares) || squares[col[0]]) {
                return;
            }
            else if (squares[col[j]]) {
                continue;
            }
            else if (!squares[col[j]]) {
                topOfColumn = col[j];
                break;
            }
            else {
                return;
            }
        }
        
        const nextSquares = squares.slice();

        if (redIsNext) {
            nextSquares[topOfColumn] = "R";
            document.getElementById(topOfColumn).style.backgroundColor = "red";
            document.getElementById(topOfColumn).style.color = "red";
        }
        else {
            nextSquares[topOfColumn] = "B";
            document.getElementById(topOfColumn).style.backgroundColor = "blue";
            document.getElementById(topOfColumn).style.color = "blue";
        }

        setSquares(nextSquares);
        setRedIsNext(!redIsNext);
    }

    const winner = calculateWinner(squares);
    const tieGame = calculateTie(squares);
    let status;

    if (winner === "R") {
        status = "Winner: Red";
    }
    else if (winner === "B") {
        status = "Winner: Blue"
    }
    else if (tieGame) {
        status = "The game is a tie.";
    }
    else {
        status = "Next player: " + (redIsNext ? "Red" : "Blue");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square idValue={0} value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square idValue={1} value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square idValue={2} value={squares[2]} onSquareClick={() => handleClick(2)}/>
                <Square idValue={3} value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square idValue={4} value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square idValue={5} value={squares[5]} onSquareClick={() => handleClick(5)}/>
                <Square idValue={6} value={squares[6]} onSquareClick={() => handleClick(6)}/>
            </div>
            <div className="board-row">
                <Square idValue={7} value={squares[7]} onSquareClick={() => handleClick(0)}/>
                <Square idValue={8} value={squares[8]} onSquareClick={() => handleClick(1)}/>
                <Square idValue={9} value={squares[9]} onSquareClick={() => handleClick(2)}/>
                <Square idValue={10} value={squares[10]} onSquareClick={() => handleClick(3)}/>
                <Square idValue={11} value={squares[11]} onSquareClick={() => handleClick(4)}/>
                <Square idValue={12} value={squares[12]} onSquareClick={() => handleClick(5)}/>
                <Square idValue={13} value={squares[13]} onSquareClick={() => handleClick(6)}/>
            </div>
            <div className="board-row">
                <Square idValue={14} value={squares[14]} onSquareClick={() => handleClick(0)}/>
                <Square idValue={15} value={squares[15]} onSquareClick={() => handleClick(1)}/>
                <Square idValue={16} value={squares[16]} onSquareClick={() => handleClick(2)}/>
                <Square idValue={17} value={squares[17]} onSquareClick={() => handleClick(3)}/>
                <Square idValue={18} value={squares[18]} onSquareClick={() => handleClick(4)}/>
                <Square idValue={19} value={squares[19]} onSquareClick={() => handleClick(5)}/>
                <Square idValue={20} value={squares[20]} onSquareClick={() => handleClick(6)}/>
            </div>
            <div className="board-row">
                <Square idValue={21} value={squares[21]} onSquareClick={() => handleClick(0)}/>
                <Square idValue={22} value={squares[22]} onSquareClick={() => handleClick(1)}/>
                <Square idValue={23} value={squares[23]} onSquareClick={() => handleClick(2)}/>
                <Square idValue={24} value={squares[24]} onSquareClick={() => handleClick(3)}/>
                <Square idValue={25} value={squares[25]} onSquareClick={() => handleClick(4)}/>
                <Square idValue={26} value={squares[26]} onSquareClick={() => handleClick(5)}/>
                <Square idValue={27} value={squares[27]} onSquareClick={() => handleClick(6)}/>
            </div>
            <div className="board-row">
                <Square idValue={28} value={squares[28]} onSquareClick={() => handleClick(0)}/>
                <Square idValue={29} value={squares[29]} onSquareClick={() => handleClick(1)}/>
                <Square idValue={30} value={squares[30]} onSquareClick={() => handleClick(2)}/>
                <Square idValue={31} value={squares[31]} onSquareClick={() => handleClick(3)}/>
                <Square idValue={32} value={squares[32]} onSquareClick={() => handleClick(4)}/>
                <Square idValue={33} value={squares[33]} onSquareClick={() => handleClick(5)}/>
                <Square idValue={34} value={squares[34]} onSquareClick={() => handleClick(6)}/>
            </div>
            <div className="board-row">
                <Square idValue={35} value={squares[35]} onSquareClick={() => handleClick(0)}/>
                <Square idValue={36} value={squares[36]} onSquareClick={() => handleClick(1)}/>
                <Square idValue={37} value={squares[37]} onSquareClick={() => handleClick(2)}/>
                <Square idValue={38} value={squares[38]} onSquareClick={() => handleClick(3)}/>
                <Square idValue={39} value={squares[39]} onSquareClick={() => handleClick(4)}/>
                <Square idValue={40} value={squares[40]} onSquareClick={() => handleClick(5)}/>
                <Square idValue={41} value={squares[41]} onSquareClick={() => handleClick(6)}/>
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [9, 10, 11, 12],
        [10, 11, 12, 13],
        [14, 15, 16, 17],
        [15, 16, 17, 18],
        [16, 17, 18, 19],
        [17, 18, 19, 20],
        [21, 22, 23, 24],
        [22, 23, 24, 25],
        [23, 24, 25, 26],
        [24, 25, 26, 27],
        [28, 29, 30, 31],
        [29, 30, 31, 32],
        [30, 31, 32, 33],
        [31, 32, 33, 34],
        [35, 36, 37, 38],
        [36, 37, 38, 39],
        [37, 38, 39, 40],
        [38, 39, 40, 41],
        [0, 7, 14, 21],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        [1, 8, 15, 22],
        [8, 15, 22, 29],
        [15, 22, 29, 36],
        [2, 9, 16, 23],
        [9, 16, 23, 30],
        [16, 23, 30, 37],
        [3, 10, 17, 24],
        [10, 17, 24, 31],
        [17, 24, 31, 38],
        [4, 11, 18, 25],
        [11, 18, 25, 32],
        [18, 25, 32, 39],
        [5, 12, 19, 26],
        [12, 19, 26, 33],
        [19, 26, 33, 40],
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [20, 27, 34, 41],
        [0, 8, 16, 24],
        [7, 15, 23, 31],
        [14, 22, 30, 38],
        [1, 9, 17, 25],
        [8, 16, 24, 32],
        [15, 23, 31, 39],
        [2, 10, 18, 26],
        [9, 17, 25, 33],
        [16, 24, 32, 40],
        [3, 11, 19, 27],
        [10, 18, 26, 34],
        [17, 25, 33, 41],
        [3, 9, 15, 21],
        [10, 16, 22, 28],
        [17, 23, 29, 35],
        [4, 10, 16, 22],
        [11, 17, 23, 29],
        [18, 24, 30, 36],
        [5, 11, 17, 23],
        [12, 18, 24, 30],
        [19, 25, 31, 37],
        [6, 12, 18, 24],
        [13, 19, 25, 31],
        [20, 26, 32, 38]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
            return squares[a];
        }
    }

    return null;
}

function calculateTie(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
            return null;
        }
    }

    return true;
}