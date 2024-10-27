import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext,setXisNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: '+ winner;
  }else {
    status = 'Next Player: '+ (xIsNext? 'X' : 'O');
  }
  function handleClick (ind) {
    if (squares[ind] || calculateWinner(squares)) {
      return;
    }
    
    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[ind] = 'X';
    }else {
      nextSquares[ind] = 'O';
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }
  function resetButton() {
    setSquares(Array(9).fill(null));
    setXisNext(true);
  }
  return (
    <>
      <div className='flex mb-8'>
        <div className='m-2 p-1 border border-blue-200 w-28 h-8'>{status}</div>
        <div className='m-2 p-1 border border-blue-500 rounded'><button onClick={resetButton}>Reset</button></div>
      </div>
      <div className='flex'>
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>
      <div className='flex'>
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
      </div>
      <div className='flex'>
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
      </div>
    </>
  );
}

export default function APP() {
  return (
    <>
      <GameBoard />
    </>
  );
}


function calculateWinner (squares) {
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i=0; i<lines.length; i++){
    const [a,b,c]=lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;

}