/**
 * Swaps two elements in an array
 * and push that animation into the animation array.
 * @param dataSet An array.
 * @param i Index of one element to be swapped.
 * @param j Index of the other element to be swapped.
 * @param anim The 2D animations array to push swap animations into.
 */
const swap = (
  dataSet: number[],
  i: number,
  j: number,
  anim: (string | number)[][]
) => {
  anim.push(['swap', i, j]);
  const temp = dataSet[i];
  dataSet[i] = dataSet[j];
  dataSet[j] = temp;
};

const HeapSort = (dataSet: number[]) => {
  const animations: (string | number)[][] = [];

  const sortedSet = dataSet.slice();
  let heapSize = sortedSet.length;
  if (heapSize <= 1) return animations;

  // Generate the initial max heap.
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    generateMaxHeap(sortedSet, heapSize, i, animations);
  }

  // Move the root of the tree (largest element) to the very end
  // of the data set, and generate another max heap with
  // the remaining elements.
  for (let i = heapSize - 1; i > 0; i--) {
    swap(sortedSet, i, 0, animations);
    generateMaxHeap(sortedSet, i, 0, animations);
  }
  return animations;
};

/**
 * Generates a max heap in which the parent node has a greater value
 * than any of its child nodes.
 * @param dataSet The deep copy of the data set.
 * @param size The size of the heap/unsorted section.
 * @param idx The index of the parent node.
 * @param anim The 2D animations array.
 */
const generateMaxHeap = (
  dataSet: number[],
  size: number,
  idx: number,
  anim: (string | number)[][]
) => {
  const left = idx * 2 + 1; // Left node index.
  const right = idx * 2 + 2; // Right node index.
  let largest = idx; // Parent node (which should be largest in a max heap).

  // Finds a child node that is greater than its parent.
  if (left < size && dataSet[left] > dataSet[largest]) largest = left;
  if (right < size && dataSet[right] > dataSet[largest]) largest = right;

  // Swaps a root node with its child node
  // if its child is larger than its parent.
  if (largest !== idx) {
    swap(dataSet, idx, largest, anim);
    // Recursively build the max heap from top (root) to bottom
    generateMaxHeap(dataSet, size, largest, anim);
  }
};

export default HeapSort;
