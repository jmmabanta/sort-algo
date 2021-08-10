const HeapSort = (dataSet: number[]) => {
  const sortedSet = dataSet.slice();
  let heapSize = sortedSet.length;
  if (heapSize <= 1) return sortedSet;

  // Generate the initial max heap.
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    generateMaxHeap(sortedSet, heapSize, i);
  }

  // Move the root of the tree (largest element) to the very end
  // of the data set, and generate another max heap with
  // the remaining elements.
  for (let i = heapSize - 1; i > 0; i--) {
    const temp = sortedSet[i];
    sortedSet[i] = sortedSet[0];
    sortedSet[0] = temp;
    generateMaxHeap(sortedSet, i, 0);
  }
  return sortedSet;
};

/**
 * Generates a max heap in which the parent node has a greater value
 * than any of its child nodes.
 * @param dataSet The deep copy of the data set.
 * @param size The size of the heap/unsorted section.
 * @param idx The index of the parent node.
 */
const generateMaxHeap = (dataSet: number[], size: number, idx: number) => {
  const left = idx * 2 + 1; // Left node index.
  const right = idx * 2 + 2; // Right node index.
  let largest = idx; // Parent node (which should be largest in a max heap).

  // Finds a child node that is greater than its parent.
  if (left < size && dataSet[left] > dataSet[largest]) largest = left;
  if (right < size && dataSet[right] > dataSet[largest]) largest = right;

  // Swaps a root node with its child node
  // if its child is larger than its parent.
  if (largest !== idx) {
    const temp = dataSet[idx];
    dataSet[idx] = dataSet[largest];
    dataSet[largest] = temp;

    // Recursively build the max heap from top (root) to bottom
    generateMaxHeap(dataSet, size, largest);
  }
};

export default HeapSort;
