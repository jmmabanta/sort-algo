/**
 * Insertion sorts a deep copy of the data set.
 * @param dataSet The current data set.
 * @returns A 2D animations array containing the information
 * needed for SortAnimator.ts to animate insertion sort.
 */
const InsertionSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  const animations: (string | number)[][] = [];

  if (sortedData.length <= 1) return animations;

  for (let i = 1; i < sortedData.length; i++) {
    let key = sortedData[i];
    let j = i - 1;

    // Highlights the division between the sorted and unsorted sets.
    if (i < sortedData.length - 1) animations.push(['key', i]);
    animations.push(['compare', j, j + 1]);

    // Keep moving the data point back until the element left of it
    // is less than its value (sorted order).
    while (j >= 0 && sortedData[j] > key) {
      animations.push(['swap', j, j + 1]);
      sortedData[j + 1] = sortedData[j];
      sortedData[j] = key;
      j--;
      // If the loop will run again, add another comparison animation.
      if (sortedData[j] > key) animations.push(['compare', j, j + 1]);
    }
  }

  return animations;
};

export default InsertionSort;
