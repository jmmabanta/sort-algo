const SelectionSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  // animations: [type: string, indexOne: number, indexTwo: number]
  // Types:
  // 'key': Sets the bar that is to be swapped with the minimum to be yellow
  // 'compare': Compares the minIndex with j
  // 'swap': Swaps the key with the mininum
  const animations: (string | number)[][] = [];
  if (sortedData.length <= 1) return animations;
  for (let i = 0; i < sortedData.length - 1; i++) {
    let minIndex = i;
    animations.push(['key', i, 0]);
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[j] < sortedData[minIndex]) minIndex = j;
      animations.push(['compare', minIndex, j]);
    }
    animations.push(['swap', i, minIndex]);
    let temp = sortedData[i];
    sortedData[i] = sortedData[minIndex];
    sortedData[minIndex] = temp;
  }
  return animations;
};

export default SelectionSort;
