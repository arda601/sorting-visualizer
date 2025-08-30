function insertionSort(arr) {
    let array = [...arr];
    let steps = [];
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            steps.push({
                array: [...array],
                swap: [j, j + 1]
            });
            j = j - 1;
        }
        array[j + 1] = key;
        steps.push({
            array: [...array],
            swap: [j + 1, i]
        });
    }
    return steps;
}
export default insertionSort;