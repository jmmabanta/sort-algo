import { swap } from './HelperMethods';

/**
 * Selection sorts a deep copy of the data set.
 * @param dataSet The current data set.
 * @returns A 2D animations array containing the information
 * needed for SortAnimator.ts to animate selection sort.
 */
const SelectionSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  const animations: (string | number)[][] = [];

  if (sortedData.length <= 1) return animations;

  for (let i = 0; i < sortedData.length - 1; i++) {
    let minIndex = i;
    // Highlight the division between the sorted and unsorted sets.
    animations.push(['key', i]);

    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[j] < sortedData[minIndex]) minIndex = j;
      animations.push(['compare', minIndex, j]);
    }

    swap(sortedData, i, minIndex, animations);
  }

  return animations;
};

export default SelectionSort;
