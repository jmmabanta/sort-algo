// A list of functions commonly used in these algorithms:

/**
 * Swaps two elements in an array
 * and push that animation into the animation array.
 * @param dataSet An array.
 * @param i Index of one element to be swapped.
 * @param j Index of the other element to be swapped.
 * @param anim The 2D animations array to push swap animations into.
 */
export const swap = (
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
