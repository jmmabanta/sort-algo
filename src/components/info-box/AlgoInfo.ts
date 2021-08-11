type AlgoInfoType = {
  [key: string]: {
    name: string;
    url: string;
    worst: string;
    avg: string;
    best: string;
  };
};

/**
 * Contains the wikipedia links to be displayed for each
 * sorting algorithm.
 */
const AlgoInfo: AlgoInfoType = {
  bubble: {
    name: 'Bubble Sort',
    url: 'https://en.wikipedia.org/wiki/Bubble_sort',
    worst: 'O(n²)',
    avg: 'O(n²)',
    best: 'O(n)'
  },
  selection: {
    name: 'Selection Sort',
    url: 'https://en.wikipedia.org/wiki/Selection_sort',
    worst: 'O(n²)',
    avg: 'O(n²)',
    best: 'O(n²)'
  },
  insertion: {
    name: 'Insertion Sort',
    url: 'https://en.wikipedia.org/wiki/Insertion_sort',
    worst: 'O(n²)',
    avg: 'O(n²)',
    best: 'O(n)'
  },
  merge: {
    name: 'Merge Sort',
    url: 'https://en.wikipedia.org/wiki/Merge_sort',
    worst: 'O(n·log(n))',
    avg: 'O(n·log(n))',
    best: 'O(n·log(n))'
  },
  quick_lom: {
    name: 'Quick Sort',
    url: 'https://en.wikipedia.org/wiki/Quick_sort',
    worst: 'O(n²)',
    avg: 'O(n·log(n))',
    best: 'O(n·log(n))'
  },
  quick_hor: {
    name: 'Quick Sort',
    url: 'https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme',
    worst: 'O(n²)',
    avg: 'O(n·log(n))',
    best: 'O(n·log(n))'
  },
  heap: {
    name: 'Heap Sort',
    url: 'https://en.wikipedia.org/wiki/Heapsort',
    worst: 'O(n·log(n))',
    avg: 'O(n·log(n))',
    best: 'O(n·log(n))'
  }
};

export default AlgoInfo;
