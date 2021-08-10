import { swap } from './HelperMethods';

/**
 * Generates a random index to pick out a pivot for quick sort.
 * @param low The lower boundary.
 * @param high The upper boundary.
 * @returns A random integer between low and high (inclusive).
 */
const getRandomPivotIndex = (low: number, high: number) =>
  Math.floor(Math.random() * (high - low + 1)) + low;

/**
 * Quick sorts a deep copy of the data set.
 *
 * Code adapted from https://www.geeksforgeeks.org/quicksort-using-random-pivoting/
 *
 * @param dataSet The current data set.
 * @param isLomuto Switch between Lomuto's partitioning scheme, or Hoare's
 * partitioning scheme.
 * @returns A 2D animations array containing the information
 * needed for SortAnimator.ts to animate quick sort.
 */
const QuickSort = (dataSet: number[], isLomuto: boolean) => {
  const animations: (string | number)[][] = [];

  if (dataSet.length <= 1) return animations;

  const sortedData = dataSet.slice();

  if (isLomuto) lomutoHelper(sortedData, 0, sortedData.length - 1, animations);
  else hoareHelper(sortedData, 0, sortedData.length - 1, animations);

  return animations;
};

// LOMUTO PARTITIONING

/**
 * Recursively quick sorts two halves of the data set,
 * using Lomuto's partitioning scheme.
 * @param dataSet The deep copy of the original data set.
 * @param low The left index boundary of the partition.
 * @param high The right index booundary of the partition.
 * @param anim The 2D animation array.
 */
const lomutoHelper = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  if (low < high) {
    const partitionIndex = lomutoPartition(dataSet, low, high, anim);

    lomutoHelper(dataSet, low, partitionIndex - 1, anim);
    lomutoHelper(dataSet, partitionIndex + 1, high, anim);
  }
};

/**
 * Scans the data set from low -> high, moving all the elements
 * less than the pivot to its left, and greater elements to its right.
 * @param dataSet The deep copy of the data set.
 * @param low The left index boundary of the partition.
 * @param high The right index boundary of the partition.
 * @param anim The 2D animations array.
 * @returns The index of the pivot, used by lomutoHelper
 * to divide and conquer.
 */
const lomutoPartition = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  // Partitioning uses the last element (high index) of a section as the pivot
  // Here, the last element is swapped with a random element
  const randIndex = getRandomPivotIndex(low, high);
  anim.push(['key', randIndex]);
  swap(dataSet, randIndex, high, anim);
  const pivot = dataSet[high];

  let i = low - 1; // Index of smallest value immediately left of the pivot

  // Scans through the data set between the low and high indeces
  for (let j = low; j < high; j++) {
    // If current element is smaller/equal to pivot
    if (dataSet[j] < pivot) {
      i++; // Increment the index of the smallest value
      anim.push(['compare', i, j]);
      swap(dataSet, i, j, anim); // Swap
    }
  }

  // Swap the element at index i + 1
  // which should be the first element bigger than the pivot,
  // with the pivot which is now placed at the high index.
  anim.push(['compare', i + 1, high]);
  swap(dataSet, i + 1, high, anim);

  return i + 1;
};

// HOARE PARTITIONING

/**
 * Recursively quick sorts the two halves of the data set,
 * using Hoare's partitioning scheme.
 * @param dataSet The deep copy of the data set.
 * @param low The left index boundary of the partition.
 * @param high The right index boundary of the partition.
 * @param anim The 2D animations array.
 */
const hoareHelper = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  if (low < high) {
    const partitionIndex = hoarePartition(dataSet, low, high, anim);
    hoareHelper(dataSet, low, partitionIndex, anim);
    hoareHelper(dataSet, partitionIndex + 1, high, anim);
  }
};

/**
 * Two left and right pointers converge on each other until they find
 * a value that is not sorted relative to the pivot. At that point, they
 * swap elements and repeats until the left pointer crosses the right pointer.
 * @param dataSet The deep copy of the data set.
 * @param low The starting point of the left index pointer.
 * @param high The starting point of the right index pointer.
 * @param anim The 2D animations array.
 * @returns A partitioning index to be used by hoareHelper to
 * divide and conquer.
 */
const hoarePartition = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  // Partitioning uses the first element (low index) of a section as the pivot
  // Here, the last element is swapped with a random element
  const randIndex = getRandomPivotIndex(low, high);
  swap(dataSet, randIndex, low, anim);
  const pivot = dataSet[low];
  anim.push(['key', randIndex]);

  // Hoare partitioning uses two pointers: i and j;
  // That start from left and right and converge until
  // They reach an unsorted value (relative to pivot)
  //  - Left pointer moves until it finds the first value >= than pivot
  //  - Right pointer moves until it finds the first value <= than pivot
  let left = low;
  let right = high;

  while (true) {
    // Moves left pointer until it finds a value >= pivot.
    while (dataSet[left] < pivot) left++;

    // Moves right pointer until it finds a value <= pivot.
    while (dataSet[right] > pivot) right--;

    anim.push(['compare', left, right]);

    // Once left and right pointers cross eachother,
    // The correct partition index is found and thus return it
    // to partition the data set into two sections:
    //  - Left half < pivot
    //  - Right half > pivot
    if (left >= right) return right;

    // Swap the greater-than-pivot left element
    // with the smaller-than-pivot right element
    swap(dataSet, left, right, anim);
  }
};

export default QuickSort;
