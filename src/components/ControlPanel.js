import React from "react";

function ControlPanel({
  algorithm,
  setAlgorithm,
  onStartSorting,
  onGenerateNewArray,
  onPause,
  onResume,
  isSorting,
  isPaused,
  onReset,
  arraySize,
  onArraySizeChange,
  speedChange,
  speed
}) {
  return (
    <div className="control-panel">
        <label>
            Algorithm
            <select value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
                <option value="bubble">Bubble Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="insertion">Insertion Sort</option>   
                <option value="quick">Quick Sort</option>
            </select>
        </label>
        <label>
            Speed
            <input type="range" min="1" max="20" 
            value={speed}
            onChange={e => speedChange(e.target.value)} />
        </label>
        <label>
            Array Size
            <input type="range" min="5" max="20"
            value={arraySize}
            onChange={e => onArraySizeChange(e.target.value)}
            disabled = {isSorting || isPaused}/>
        </label>
        <button className="blue" onClick={onGenerateNewArray}>Generate New Array</button>
        <button className="green" onClick={onStartSorting} disabled={isSorting && !isPaused}>
          Start Sorting
        </button>
        <button
          className="yellow"
          onClick={isPaused ? onResume : onPause}
          disabled={!isSorting}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button  
        className="red" 
        onClick={onReset} 
        disabled = {!isSorting && isPaused}>Reset</button>
        
    </div>
  );
}

export default ControlPanel;