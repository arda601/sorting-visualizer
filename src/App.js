import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Navbar.js';
import ControlPanel from './components/ControlPanel.js';
import DescriptionCard from './components/DescriptionCard.js';
import Visualizer from './components/Visualizer.js';
import getBubbleSortSteps from './algorithms/bubbleSort';
import quickSortSteps from './algorithms/quickSort.js';
import selectionSortv2 from './algorithms/selectionSortv2.js';
import insertionSort from './algorithms/insertionSort.js';

function getRandomArray(size = 20, min = 10, max = 120) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function App() {
  const [algorithm, setAlgorithm] = useState('bubble');
  const [array, setArray] = useState(getRandomArray());
  const [swapIndices, setSwapIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const isPausedRef = useRef(isPaused);
  const stepsRef = useRef([]);
  const stepIndexRef = useRef(0);
  const timerRef = useRef(null);
  const [arraySize, setarraySize] = useState(20)
  const [speed, setSpeed] = useState(10);
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const handleStartSorting = () => {
    if (isSorting && isPaused) {
      setIsPaused(false);
      animateSort();
      return;
    }
    if (algorithm === 'bubble') {
      const steps = getBubbleSortSteps(array);
      stepsRef.current = steps;
      stepIndexRef.current = 0;
      setIsSorting(true);
      setIsPaused(false);
      animateSort();
    }
if (algorithm === 'quick') {
  const steps = quickSortSteps(array);
  stepsRef.current = steps;
  stepIndexRef.current = 0;
  setIsSorting(true);
  setIsPaused(false);
  animateSort();

}
  if (algorithm === "selection") {
    const steps = selectionSortv2(array);
    stepsRef.current = steps;
    stepIndexRef.current = 0;
    setIsSorting(true);
    setIsPaused(false);
    animateSort();
  }
  if (algorithm === "insertion") {
    const steps = insertionSort(array);
    stepsRef.current = steps;
    stepIndexRef.current = 0;
    setIsSorting(true);
    setIsPaused(false);
    animateSort();
  }
};
  const speedChange = (newSpeed) => {
    setSpeed(Number(newSpeed));
    if(isSorting && !isPaused){
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(animateSort, Math.max(20, 400 - speed * 18));
    }
  };


  const animateSort = () => {
    if (isPausedRef.current === true) 
      return;
    else if (stepIndexRef.current < stepsRef.current.length) {
      const step = stepsRef.current[stepIndexRef.current];
      const nextArray = step.array;
      const swap = step.swap;
      setArray(nextArray);
      setSwapIndices(swap);
      stepIndexRef.current += 1;
      timerRef.current = setTimeout(animateSort, Math.max(20, 400 - speed * 18));
    } else {
      setIsSorting(false);
      setSwapIndices([]);
      setIsSorted(true);
      setTimeout(() => setIsSorted(false), 1200);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
  const handleResume = () => {
  setIsPaused(false);
  setTimeout(() => {
    animateSort();
  }, 0);
};
  const handleReset = () => {
    setIsSorting(false);
    setIsPaused(false);
    setIsSorted(false);
    setSwapIndices([]);
    stepIndexRef.current = 0;
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleGenerateNewArray = () => {
    setArray(getRandomArray());
    setSwapIndices([]);
    setIsSorting(false);
    setIsPaused(false);
    setIsSorted(false);
  };
  const handleArraySizeChange = (size) => {
    setarraySize(size);
    setArray(getRandomArray(size));
    setSwapIndices([]);
    setIsSorting(false);
    setIsPaused(false);
    setIsSorted(false);
  }

  return (
    <div className="App">
      <Header />
      <ControlPanel
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        onStartSorting={handleStartSorting}
        onGenerateNewArray={handleGenerateNewArray}
        onPause={handlePause}
        isSorting={isSorting}
        isPaused={isPaused}
        onResume={handleResume}
        onReset={handleReset}
        onArraySizeChange={handleArraySizeChange}
        arraySize={arraySize}
        speedChange={speedChange}
      />
      <Visualizer array={array} swapIndices={swapIndices} isSorted={isSorted} />
      <DescriptionCard algorithm={algorithm} />
    </div>
  );
}

export default App;
