import { swap } from './HelperMethods';

/**
 * Heap sorts a deep copy of the data set.
 * @param dataSet The current data set.
 * @returns A 2D animations array containing the information
 * needed for SortAnimator.ts to animate heap sort.
 */
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
    animations.push(['key', i]);
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

  const compareAnimation: (string | number)[] = ['compare'];

  // Finds a child node that is greater than its parent.
  if (left < size) {
    compareAnimation.push(left);
    if (dataSet[left] > dataSet[largest]) largest = left;
  }
  if (right < size) {
    compareAnimation.push(right);
    if (dataSet[right] > dataSet[largest]) largest = right;
  }

  if (compareAnimation.length > 1) anim.push(compareAnimation);

  // Swaps a root node with its child node
  // if its child is larger than its parent.
  if (largest !== idx) {
    swap(dataSet, idx, largest, anim);
    // Recursively build the max heap from top (root) to bottom
    generateMaxHeap(dataSet, size, largest, anim);
  }
};

export default HeapSort;
