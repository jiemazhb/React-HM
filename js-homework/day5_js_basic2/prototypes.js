// reinvent the wheel: prototype methods

export function myMap(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }

  return result;
}

export function myFilter(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
}

export function myConcat(arr1, arr2) {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  const res = [...arr1, ...arr2];
  return res;
}

export function myFind(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}

export function myEvery(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

export function mySome(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

export function myIncludes(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

export function myJoin(arr, separator) {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += separator;
    }
  }
  return result;
}

export function myPush(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  arr[arr.length] = val;
  return arr;
}

export function myReverse1(arr) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

export function myReverse2(arr) {
  // Same as above but this time returns the original array reference reversed.
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// Challenges
export  function myReduce(arr, cb, initial) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
  let accumulator = initial;
  for (let i = 0; i < arr.length; i++) {
    accumulator = cb(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

export function mySort(arr, cb) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (cb(result[j], result[j + 1]) > 0) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

export function mySlice(arr, start, end) {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
  const result = [];
  

  if (start < 0) {
    start = arr.length + start;
  }
  

  if (end < 0) {
    end = arr.length + end;
  }

 
  if (end === undefined) {
    end = arr.length;
  }


  for (let i = start; i < end; i++) {
    if (i >= 0 && i < arr.length) {
      result.push(arr[i]);
    }
  }

  return result;

}
