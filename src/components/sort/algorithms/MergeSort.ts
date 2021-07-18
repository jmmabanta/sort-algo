// Taken from
// https://runestone.academy/runestone/books/published/apcsareview/SearchSort/mergeSort.html
// * Based on the AP Computer Science A course
// * Originally in Java, adapted for TypeScript

export const MergeSort = (array: number[]) => {
  const sortedArray = array.slice(); // Makes sure OG array is not mutated
  const temp = new Array<number>(sortedArray.length);
  mergeSortHelper(sortedArray, 0, sortedArray.length - 1, temp);
  return sortedArray;
};

const mergeSortHelper = (
  arr: number[],
  low: number,
  high: number,
  temp: number[]
) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSortHelper(arr, low, mid, temp);
    mergeSortHelper(arr, mid + 1, high, temp);
    merge(arr, low, mid, high, temp);
  }
};

const merge = (
  arr: number[],
  low: number,
  mid: number,
  high: number,
  temp: number[]
) => {
  let i = low;
  let j = mid + 1;
  let k = low;

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j <= high) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  for (k = low; k <= high; k++) {
    arr[k] = temp[k];
  }
};
