// Code adapted from https://www.geeksforgeeks.org/quicksort-using-random-pivoting/
const QuickSortLomuto = (dataSet: number[]) => {
  const animations: (string | number)[][] = [];

  if (dataSet.length <= 1) return animations;

  const sortedData = dataSet.slice();
  quickSortHelper(sortedData, 0, sortedData.length - 1, animations);

  return animations;
};

const quickSortHelper = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  if (low < high) {
    const partitionIndex = partitionData(dataSet, low, high, anim);

    quickSortHelper(dataSet, low, partitionIndex - 1, anim);
    quickSortHelper(dataSet, partitionIndex + 1, high, anim);
  }
};

const swapValues = (
  dataSet: number[],
  i: number,
  j: number,
  anim: (string | number)[][]
) => {
  anim.push(['swap', i, j]);
  const temp = dataSet[i];
  dataSet[i] = dataSet[j];
  dataSet[j] = temp;
};

const partitionData = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  // Pivot point is random
  const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  anim.push(['key', pivotIndex, pivotIndex]);

  // Random pivot is moved to the last element of the list
  swapValues(dataSet, pivotIndex, high, anim);
  const pivot = dataSet[high];

  let i = low - 1; // Index of small

  for (let j = low; j < high; j++) {
    // If current element is smaller/equal to pivot
    if (dataSet[j] < pivot) {
      // Swap them
      i++;
      swapValues(dataSet, i, j, anim);
    }
  }

  // Swap (i+1) with the pivot (which is placed at the high index)
  swapValues(dataSet, i + 1, high, anim);

  return i + 1;
};

export default QuickSortLomuto;
