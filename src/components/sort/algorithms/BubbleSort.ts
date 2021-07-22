const BubbleSort = (dataSet: number[]) => {
  const animations: (string | number)[][] = [];

  if (dataSet.length <= 1) return animations;

  const sortedData = dataSet.slice();
  const dataSize = sortedData.length;

  for (let i = 0; i < dataSize - 1; i++) {
    let didSwap = false;

    for (let j = 0; j < dataSize - i - 1; j++) {
      if (sortedData[j] > sortedData[j + 1]) {
        const temp = sortedData[j];
        sortedData[j] = sortedData[j + 1];
        sortedData[j + 1] = temp;

        didSwap = true;
      }
    }

    if (!didSwap) return animations;
  }

  return animations;
};

export default BubbleSort;
