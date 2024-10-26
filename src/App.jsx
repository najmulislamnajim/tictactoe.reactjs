import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick () {
    setValue('X');
  }
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={handleClick}>
      {value}
    </button>
  );
}

function GameBoard() {
  return (
    <>
      <div className='flex'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className='flex'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className='flex'>
        <Square/>
        <Square/>
        <Square/>
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
