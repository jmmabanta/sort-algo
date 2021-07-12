const selectionSort = (dataSet: number[]) => {
  let sortedData = dataSet.slice();
  let animations = [];
  if (sortedData.length === 1) return sortedData;
  for (let i = 0; i < sortedData.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[j] < sortedData[minIndex]) {
        minIndex = j;
      }
    }
    let temp = sortedData[i];
    sortedData[i] = sortedData[minIndex];
    sortedData[minIndex] = temp;
  }
  return sortedData;
};

export default selectionSort;
