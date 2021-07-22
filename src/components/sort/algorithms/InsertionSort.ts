const InsertionSort = (dataSet: number[]) => {
  const sortedData = dataSet.slice();
  const animations: (string | number)[][] = [];

  if (sortedData.length <= 1) return animations;

  for (let i = 1; i < sortedData.length; i++) {
    let key = sortedData[i];
    let j = i - 1;

    if (i < sortedData.length - 1) animations.push(['key', i]);
    animations.push(['compare', j]);

    while (j >= 0 && sortedData[j] > key) {
      animations.push(['swap', j]);
      sortedData[j + 1] = sortedData[j];
      sortedData[j] = key;
      j--;
      if (sortedData[j] > key) animations.push(['compare', j]);
    }
  }

  return animations;
};

export default InsertionSort;
