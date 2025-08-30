function selectionSortv2(arr){
    let array = [...arr];
    let steps = [];
    for (let i = 0; i < array.length - 1; i++){
    let min_indx = i;
        for (let j = i +1; j < array.length; j++){
            if(array[j] < array[min_indx]){
                min_indx = j;
          
        }

    }
    [array[i], array[min_indx]] = [array[min_indx], array[i]];
    
    steps.push({
        array : [...array],
        swap: [i, min_indx]
    })
              
    }
    return steps;
}   
export default selectionSortv2;