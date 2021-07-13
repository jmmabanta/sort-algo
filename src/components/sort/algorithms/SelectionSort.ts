const SelectionSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  const animations: (string | number)[][] = [];
  if (sortedData.length <= 1) return animations;
  for (let i = 0; i < sortedData.length - 1; i++) {
    let minIndex = i;
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
