const selectionSort = (dataSet: number[]): number[] => {
  let sortedData = dataSet.slice();
  if (sortedData.length === 1) return sortedData;
  // console.log('UNSORTED = ' + sortedData);
  for (let i = 0; i < sortedData.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[j] < sortedData[minIndex]) minIndex = j;
    }
    let temp = sortedData[i];
    sortedData[i] = sortedData[minIndex];
    sortedData[minIndex] = temp;
  }
  // console.log('SORTED = ' + sortedData);
  return sortedData;
};

export default selectionSort;
