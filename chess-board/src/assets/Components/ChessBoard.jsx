import React, { useState } from "react";

const ChessBoard = () => {
  const size = 8;
  const [highlightedCells, setHighlightedCells] = useState([]);

  const handleCellClick = (row, col) => {
    const newHighlightedCells = [];
  
    for (let i = 0; i < size; i++) {
      // Calculate primary and secondary diagonal cells
      const primaryCol = col + (i - row);
      const secondaryCol = col - (i - row);
      
      // Push valid cells to the newHighlightedCells array
      if (primaryCol >= 0 && primaryCol < size) {
        newHighlightedCells.push({ row: i, col: primaryCol });
        
      }
      
      
      if (secondaryCol >= 0 && secondaryCol < size) {
        newHighlightedCells.push({ row: i, col: secondaryCol });
      }
    }
  
    setHighlightedCells(newHighlightedCells);
  };
  
  const isHighlighted = (row, col) =>
    highlightedCells.some(cell => cell.row === row && cell.col === col);
  

  const cells = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      cells.push(
        <div
          key={`${row}-${col}`}
          className={`w-12 h-12 flex items-center justify-center
            ${(row + col) % 2 === 0 ? "bg-white" : "bg-black"}
            ${isHighlighted(row, col) ? "bg-red-600" : ""}
          `}
          onClick={() => handleCellClick(row, col)}
        />
      );
    }
  }

  return (
    <div className="text-center">
      <p className="mb-2">Click on any cell to color diagonally</p>
      <div className="grid grid-cols-8 gap-0.5 border-2 border-black w-fit mx-auto">
        {cells}
      </div>
    </div>
  );
};

export default ChessBoard;
