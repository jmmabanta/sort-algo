// Taken from
// https://runestone.academy/runestone/books/published/apcsareview/searchsort/mergesort.html
// * Based on the AP Computer Science A course
// * Originally in Java, adapted for TypeScript
// (also basically the same from Clement's visualizer/AlgoExpert.io)

const MergeSort = (array: number[]) => {
  const animations: (string | number)[][] = [];

  if (array.length <= 1) return animations;

  const sortedArray = array.slice();
  const temp = array.slice();

  mergeSortHelper(sortedArray, 0, sortedArray.length - 1, temp, animations);

  return animations;
};

const mergeSortHelper = (
  arr: number[],
  low: number,
  high: number,
  temp: number[],
  anim: (string | number)[][]
) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSortHelper(temp, low, mid, arr, anim);
    mergeSortHelper(temp, mid + 1, high, arr, anim);
    merge(arr, low, mid, high, temp, anim);
  }
};

const merge = (
  arr: number[],
  low: number,
  mid: number,
  high: number,
  temp: number[],
  anim: (string | number)[][]
) => {
  let i = low;
  let j = mid + 1;
  let k = low;

  anim.push(['key', mid]);

  while (i <= mid && j <= high) {
    anim.push(['compare', i, j]);

    if (temp[i] < temp[j]) {
      anim.push(['swap', k, temp[i]]);
      arr[k] = temp[i];
      i++;
    } else {
      anim.push(['swap', k, temp[j]]);
      arr[k] = temp[j];
      j++;
    }

    k++;
  }

  while (i <= mid) {
    anim.push(['swap', k, temp[i]]);
    arr[k] = temp[i];
    i++;
    k++;
  }

  while (j <= high) {
    anim.push(['swap', k, temp[j]]);
    arr[k] = temp[j];
    j++;
    k++;
  }
};

export default MergeSort;
