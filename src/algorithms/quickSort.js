function partition(arr, low, high, steps) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high-1; j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push({array: [...arr], swap: [i, j]
            });
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({array: [...arr], swap: [i + 1, high] });
    return i + 1;
}

function quickSortSteps(arr) {
    let array = [...arr];
    let steps = [];
    function sort(arr, low, high) {
        if (low < high) {
            let piv = partition(arr, low, high, steps);
            sort(arr, low, piv - 1);
            sort(arr, piv + 1, high);
        }
    }
    sort(array, 0, array.length - 1);
    return steps;
}

export default quickSortSteps;