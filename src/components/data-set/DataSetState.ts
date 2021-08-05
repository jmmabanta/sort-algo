import React, { useState } from 'react';
import { PRIMARY_COLOR } from '../sort/SortAnimator';
import { calculateHeight } from './DataSetDisplay';

/**
 * Randomly generates an array (data set) of given size and max value.
 * @param size The number of bars / size of data set.
 * @param height The maximum value of data (used for scaling bars).
 * @returns A randomly generated data set.
 */
const generateData = (size: number, height: number): number[] => {
  let data: number[] = [size];
  for (let i = 0; i < size; i++) {
    data[i] = Math.random() * height + 1;
  }
  return data;
};

// The increment in which the data size grows
const INCREMENT = 25;

/**
 * Manages the state of the data set (the bars).
 * @param initialValue The initial size of the data set
 * (default = 100).
 * @param height The max value of data set values
 * (between 1 and height, inclusive).
 * @returns A collection of useful properties and functions.
 */
const DataSetState = (initialValue: number, height: number) => {
  const [dataSet, setDataSet] = useState(generateData(initialValue, height));

  let resetSorted: () => void;

  /**
   * Gives DataSetState access to the reset function in SortAnimator
   * (yes, its jank).
   * @param func The reset function found in the animState.
   */
  const setResetSorted = (func: () => void) => {
    resetSorted = func;
  };

  /**
   * Generates a new data set with a size set by the slider.
   * Also resets the styling of the bars
   * @param e The slider event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = parseFloat(e.target.value);
    const newSize = Math.ceil(input / INCREMENT) * INCREMENT;

    setDataSet((oldData) => generateData(newSize, height));
    resetStyling();
  };

  /**
   * Generates a new data set with the same size as previous.
   */
  const regenerateNewData = () => {
    setDataSet((oldData) => generateData(oldData.length, height));
    resetStyling();
  };

  /**
   * Resets data set back to before it was sorted.
   */
  const undoSort = () => {
    resetStyling();

    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < dataBars.length; i++) {
      dataBars[i].style.height = `${calculateHeight(dataSet, dataSet[i])}vh`;
    }
  };

  /**
   * Resets the styling of the data bars.
   */
  const resetStyling = () => {
    resetSorted();

    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < dataBars.length; i++)
      dataBars[i].style.backgroundColor = PRIMARY_COLOR;
  };

  // Organizing things
  const functions = {
    handleChange,
    regenerateNewData,
    undoSort,
    setResetSorted
  };

  return { functions, dataSet };
};

export default DataSetState;
