type AlgoInfoType = {
  [key: string]: {
    name: string;
    url: string;
  };
};

const AlgoInfo: AlgoInfoType = {
  bubble: {
    name: 'Bubble Sort',
    url: 'https://en.wikipedia.org/wiki/Bubble_sort'
  },
  selection: {
    name: 'Selection Sort',
    url: 'https://en.wikipedia.org/wiki/Selection_sort'
  },
  insertion: {
    name: 'Insertion Sort',
    url: 'https://en.wikipedia.org/wiki/Insertion_sort'
  },
  merge: {
    name: 'Merge Sort',
    url: 'https://en.wikipedia.org/wiki/Merge_sort'
  },
  quick_lom: {
    name: 'Quick Sort',
    url: 'https://en.wikipedia.org/wiki/Quick_sort'
  },
  quick_hor: {
    name: 'Quick Sort',
    url: 'https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme'
  }
};

export default AlgoInfo;
