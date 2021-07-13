const insertionSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  if (sortedData.length <= 1) return sortedData;
  for (let i = 1; i < sortedData.length; i++) {
    let key = sortedData[i];
    let j = i - 1;
    while (j >= 0 && sortedData[j] > key) {
      sortedData[j + 1] = sortedData[j];
      j--;
    }
    sortedData[j + 1] = key;
  }
  return sortedData;
};

export default insertionSort;
