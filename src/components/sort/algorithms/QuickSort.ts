const QuickSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  if (sortedData.length <= 1) return sortedData;
  quickSortHelper(sortedData, 0, sortedData.length - 1);
  return sortedData;
};

const quickSortHelper = (dataSet: number[], low: number, high: number) => {
  if (low < high) {
    const partitionIndex = partitionData(dataSet, low, high);

    quickSortHelper(dataSet, low, partitionIndex - 1);
    quickSortHelper(dataSet, partitionIndex + 1, high);
  }
};

const swapValues = (dataSet: number[], i: number, j: number) => {
  const temp = dataSet[i];
  dataSet[i] = dataSet[j];
  dataSet[j] = temp;
};

const partitionData = (dataSet: number[], low: number, high: number) => {
  // Pivot point is random
  const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;

  // Random pivot is moved to the last element of the list
  swapValues(dataSet, pivotIndex, high);
  const pivot = dataSet[high];

  let i = low - 1; // Index of small

  for (let j = low; j < high; j++) {
    // If current element is smaller/equal to pivot
    if (dataSet[j] < pivot) {
      i++;
      // Swap them
      swapValues(dataSet, i, j);
    }
  }

  // Swap (i+1) with the pivot (which is placed at the high index)
  swapValues(dataSet, i + 1, high);

  return i + 1;
};

export default QuickSort;
