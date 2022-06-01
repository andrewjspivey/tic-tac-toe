import React, { useState } from "react";
import styled from "styled-components";

const GameBoard = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
`;

const Box = styled.div`
  border: 1px solid;
`;

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [isWinner, setIsWinner] = useState(false);

  const checkIsWinner = (board) => {
    const allElementsSame = (arr) => {
      if (arr[0] === arr[1] && arr[1] === arr[3] && arr[0] !== null) {
        return true;
      }
    };
    const getRows = () => {
      const row1 = [board[0], board[1], board[2]];
      const row2 = [board[3], board[4], board[5]];
      const row3 = [board[6], board[7], board[8]];
      const boardRows = [row1, row2, row3];
      console.log(boardRows);
      return boardRows;
    };
    const rows = getRows();
    const rowWinner = rows.some(allElementsSame);
    console.log(rowWinner);
    if (rowWinner) setIsWinner(true);
    // for (let index = 0; index < rows.length; index++) {
    //   if (rows[index] === ["x", "x", "x"] || rows[index] === ["o", "o", "o"]) {
    //     setIsWinner(true);
    //   }
    // }
  };

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (boardCopy[index] !== null) return;
    boardCopy[index] = currentPlayer;
    setBoard(boardCopy);
    if (currentPlayer === "x") {
      setCurrentPlayer("o");
    } else setCurrentPlayer("x");
    checkIsWinner(boardCopy);
  };
  return (
    <GameBoard>
      {board.map((box, i) => (
        <Box key={i} onClick={() => handleClick(i)}>
          {box}
        </Box>
      ))}
    </GameBoard>
  );
};

export default Board;
