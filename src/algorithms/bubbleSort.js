function getBubbleSortSteps(arr) {
  let array = [...arr];
  let steps = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      let swapped = false;
      let swapIndices = [];
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
        swapIndices = [j, j + 1];
      }
      steps.push({
        array: [...array],
        swap: swapIndices
      });
    }
  }
  return steps;
}


export default getBubbleSortSteps;