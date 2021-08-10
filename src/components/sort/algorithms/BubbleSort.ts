import { swap } from './HelperMethods';

/**
 * Bubble sorts a deep copy of the original data set.
 * @param dataSet The current data set.
 * @returns An 2D animations array that contains the information
 * necessary for SortAnimator.ts to animating bubble sort.
 */
const BubbleSort = (dataSet: number[]) => {
  const animations: (string | number)[][] = [];

  if (dataSet.length <= 1) return animations;

  const sortedData = dataSet.slice();
  const dataSize = sortedData.length;

  for (let i = 0; i < dataSize - 1; i++) {
    // For fast bubble sort, if it goes through an array pass
    // without swapping, then it means the data set is fully sorted.
    let didSwap = false;

    // Loop through the unsorted part of the data set.
    for (let j = 0; j < dataSize - i - 1; j++) {
      animations.push(['compare', j, j + 1]);

      if (sortedData[j] > sortedData[j + 1]) {
        swap(sortedData, j, j + 1, animations);
        didSwap = true;
      }
    }

    // Highlights the last sorted element in the data set.
    animations.push(['key', dataSize - i - 1]);

    // If a pass if completed without swapping, immedietely return
    // as sorting is finished.
    if (!didSwap) return animations;
  }

  return animations;
};

export default BubbleSort;
