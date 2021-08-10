// Taken from
// https://runestone.academy/runestone/books/published/apcsareview/searchsort/mergesort.html
// * Based on the AP Computer Science A course
// * Originally in Java, adapted for TypeScript
// (also basically the same from Clement's visualizer/AlgoExpert.io)

/**
 * Merge sorts a deep copy of the data set.
 * @param dataSet The current data set.
 * @returns A 2D animations array containing the information
 * needed for SortAnimator.ts to animate merge sort.
 */
const MergeSort = (dataSet: number[]) => {
  const animations: (string | number)[][] = [];

  if (dataSet.length <= 1) return animations;

  const sortedArray = dataSet.slice();
  const temp = dataSet.slice();

  mergeSortHelper(sortedArray, 0, sortedArray.length - 1, temp, animations);

  return animations;
};

/**
 * Recursively merge sortes the deep copy of the data set.
 * @param arr The current section of the array to be sorted.
 * @param low The left most index of sorting.
 * @param high The right most index of sorting.
 * @param temp A temporary array to store values, which will
 * later be insorted into the sorted set.
 * @param anim The 2D animations array.
 */
const mergeSortHelper = (
  arr: number[],
  low: number,
  high: number,
  temp: number[],
  anim: (string | number)[][]
) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSortHelper(temp, low, mid, arr, anim);
    mergeSortHelper(temp, mid + 1, high, arr, anim);
    merge(arr, low, mid, high, temp, anim);
  }
};

/**
 * Merges the two partitions into their sorted positions in the data set.
 * @param arr The current section of the array to put sorted values into.
 * @param low The left most index of the data set to be sorted.
 * @param mid The mid point index of the data set section.
 * @param high The right most index of the data set to be sorted.
 * @param temp A temporary array to store values, which are to be merged
 * with arr.
 * @param anim The 2D animations array.
 */
const merge = (
  arr: number[],
  low: number,
  mid: number,
  high: number,
  temp: number[],
  anim: (string | number)[][]
) => {
  let i = low;
  let j = mid + 1;
  let k = low;

  // Highlight the mid point
  // AKA the the divider between two partitions
  // which are to be merged together.
  anim.push(['key', mid]);

  // Move elements from the left and right partitions
  // (stored in the temp array)
  // into their sorted positions, alternating between them.
  while (i <= mid && j <= high) {
    anim.push(['compare', i, j]);

    if (temp[i] < temp[j]) {
      anim.push(['swap', k, temp[i]]);
      arr[k] = temp[i];
      i++;
    } else {
      anim.push(['swap', k, temp[j]]);
      arr[k] = temp[j];
      j++;
    }

    k++;
  }

  // Move any remaining elements from the left partition
  while (i <= mid) {
    anim.push(['swap', k, temp[i]]);
    arr[k] = temp[i];
    i++;
    k++;
  }

  // Move any remaining elements from the right partition
  while (j <= high) {
    anim.push(['swap', k, temp[j]]);
    arr[k] = temp[j];
    j++;
    k++;
  }
};

export default MergeSort;
