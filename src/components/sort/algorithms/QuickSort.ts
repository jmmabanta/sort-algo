// Helper Methods
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

const getRandomPivotIndex = (low: number, high: number) =>
  Math.floor(Math.random() * (high - low + 1)) + low;

// Code adapted from https://www.geeksforgeeks.org/quicksort-using-random-pivoting/
const QuickSort = (dataSet: number[], isLomuto: boolean) => {
  const animations: (string | number)[][] = [];

  if (dataSet.length <= 1) return animations;

  const sortedData = dataSet.slice();

  if (isLomuto) lomutoHelper(sortedData, 0, sortedData.length - 1, animations);
  else hoareHelper(sortedData, 0, sortedData.length - 1, animations);

  return animations;
};

// LOMUTO PARTITIONING
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

const lomutoPartition = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  // Partitioning uses the last element (high index) of a section as the pivot
  // Here, the last element is swapped with a random element
  const randIndex = getRandomPivotIndex(low, high);
  anim.push(['key', randIndex, randIndex]);
  swapValues(dataSet, randIndex, high, anim);
  const pivot = dataSet[high];

  let i = low - 1; // Index of small

  for (let j = low; j < high; j++) {
    // If current element is smaller/equal to pivot
    if (dataSet[j] < pivot) {
      // Swap them
      i++;
      anim.push(['compare', i, j]);
      swapValues(dataSet, i, j, anim);
    }
  }

  // Swap (i+1) with the pivot (which is placed at the high index)
  anim.push(['compare', i + 1, high]);
  swapValues(dataSet, i + 1, high, anim);

  return i + 1;
};

// HOARE PARTITIONING
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

const hoarePartition = (
  dataSet: number[],
  low: number,
  high: number,
  anim: (string | number)[][]
) => {
  // Partitioning uses the first element (low index) of a section as the pivot
  // Here, the last element is swapped with a random element
  const randIndex = getRandomPivotIndex(low, high);
  swapValues(dataSet, randIndex, low, anim);
  const pivot = dataSet[low];
  anim.push(['key', randIndex, randIndex]);

  // Hoare partitioning uses two pointers: i and j;
  // That start from left and right and converge until
  // They reach an unsorted value (relative to pivot)
  //  - Left pointer moves until it finds the first value >= than pivot
  //  - Right pointer moves until it finds the first value <= than pivot
  let left = low;
  let right = high;

  while (true) {
    // Moves left pointer
    while (dataSet[left] < pivot) {
      left++;
      // anim.push(['compare', left, right]);
    }

    // Moves right pointer
    while (dataSet[right] > pivot) {
      right--;
      // anim.push(['compare', left, right]);
    }
    anim.push(['compare', left, right]);

    // Once left and right pointers cross eachother,
    // The correct partition index is found
    if (left >= right) return right;

    // Swap the greater-than-pivot left element
    // with the smaller-than-pivot right element
    swapValues(dataSet, left, right, anim);

    // This in turn separates the dataSet into two halves:
    //  - Left half that is smaller than the pivot
    //  - Right half that is greater than the pivot
    // Loop repeats until pointers cross each other
    // - At that point, another quick sort is called recursively
    //   on the new halves
  }
};

export default QuickSort;
