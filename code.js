function flip(arr, n) {
    let temp, start = 0;
    while (start < n)
    {
        temp = arr[start];
        arr[start] = arr[n];
        arr[n] = temp;
        start++;
        n--;
    }
}

function findMax(arr, n) {
    //tried to play around with a ternary operator here, would this cause any unknown errors?
    for (maxIndex = 0, i = 0; i < n; ++i) arr[i] > arr[maxIndex] ? maxIndex = i : null;
    return maxIndex;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    if(array.length == 0 || array.length == 1) return array;
    pancakeSortIterative(array, array.length);
    //pancakeSortRecursive(array, array.length);
    //for the sake of analysis I used the iterative approach, as it is easier to get an understanding of what is going on underneath
    return array;
}

function pancakeSortIterative(arr, n)
{
    for (curr_size = n; curr_size > 1; --curr_size) //complexity of n
    {
        let maxIndex = findMax(arr, curr_size);//n, makes n*n = n^2
        if (maxIndex != curr_size - 1)
        {
            flip(arr, maxIndex);
            flip(arr, curr_size - 1);
        }
    }
      
    return 0;
}

function pancakeSortRecursive(arr, n) {
    if (n === 1) {
        // Base case: If the array is already sorted or has only one element, return
        return;
    }
     
    // Find the index of the maximum element in the unsorted portion of the array
    let maxIndex = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
 
    // Move the maximum element to the front of the array if it's not already there
    if (maxIndex !== 0) {
        flip(arr, maxIndex);
    }
    // Flip the entire array to move the maximum element to its correct position
    flip(arr, n - 1);
    // Recursively sort the remaining unsorted portion of the array
    pancakeSortRecursive(arr, n - 1);
}