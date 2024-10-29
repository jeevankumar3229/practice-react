import React, { useState } from 'react';

const TransferList = () => {
  const [leftList, setLeftList] = useState(['css', 'html', 'c#', 'c++', 'python']);
  const [rightList, setRightList] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  // Handle selecting items from the left list
  const handleLeftSelection = (pl) => {
    setSelectedLeft((prev) =>
      prev.includes(pl) ? prev.filter((item) => item !== pl) : [...prev, pl]
    );
  };

  // Handle selecting items from the right list
  const handleRightSelection = (pl) => {
    setSelectedRight((prev) =>
      prev.includes(pl) ? prev.filter((item) => item !== pl) : [...prev, pl]
    );
  };

  // Move selected items from left to right
  const moveToRight = () => {
    setRightList([...rightList, ...selectedLeft]);
    setLeftList(leftList.filter((item) => !selectedLeft.includes(item)));
    setSelectedLeft([]);
  };

  // Move selected items from right to left
  const moveToLeft = () => {
    setLeftList([...leftList, ...selectedRight]);
    setRightList(rightList.filter((item) => !selectedRight.includes(item)));
    setSelectedRight([]);
  };

  // Move all items from left to right
  const moveAllToRight = () => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
    setSelectedLeft([]);
  };

  // Move all items from right to left
  const moveAllToLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
    setSelectedRight([]);
  };

  return (
    <div className="text-center p-8">
      <div className="flex justify-center items-center space-x-4">
        {/* Left List */}
        <div className="border border-gray-300 p-4 w-48 h-60 overflow-auto">
          {leftList.map((pl) => (
            <div key={pl} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedLeft.includes(pl)}
                onChange={() => handleLeftSelection(pl)}
                className="text-blue-600"
              />
              <label>{pl}</label>
            </div>
          ))}
        </div>

        {/* Transfer Buttons */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={moveAllToRight}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded"
          >
            &gt;&gt;
          </button>
          <button
            onClick={moveToRight}
            disabled={selectedLeft.length === 0}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded disabled:bg-gray-200"
          >
            &gt;
          </button>
          <button
            onClick={moveToLeft}
            disabled={selectedRight.length === 0}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded disabled:bg-gray-200"
          >
            &lt;
          </button>
          <button
            onClick={moveAllToLeft}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded"
          >
            &lt;&lt;
          </button>
        </div>

        {/* Right List */}
        <div className="border border-gray-300 p-4 w-48 h-60 overflow-auto">
          {rightList.map((pl) => (
            <div key={pl} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedRight.includes(pl)}
                onChange={() => handleRightSelection(pl)}
                className="text-blue-600"
              />
              <label>{pl}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
