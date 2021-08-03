import React, { useState } from 'react';
import { PRIMARY_COLOR } from '../sort/SortAnimator';
import { calculateHeight } from './DataSetDisplay';

// Generates random data
const generateData = (size: number, height: number): number[] => {
  let data: number[] = [size];
  for (let i = 0; i < size; i++) {
    data[i] = Math.random() * height + 1;
  }
  return data;
};

// The increment in which the data size grows
const INCREMENT = 25;

const DataSetState = (initialValue: number, height: number) => {
  const [dataSet, setDataSet] = useState(generateData(initialValue, height));

  let resetSorted: () => void;

  const setResetSorted = (func: () => void) => {
    resetSorted = func;
  };

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = parseFloat(e.target.value);
    const newSize = Math.ceil(input / INCREMENT) * INCREMENT;

    setDataSet((oldData) => generateData(newSize, height));
    resetStyling();
  };

  const regenerateNewData = () => {
    setDataSet((oldData) => generateData(oldData.length, height));
    resetStyling();
  };

  const undoSort = () => {
    resetStyling();

    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < dataBars.length; i++) {
      dataBars[i].style.height = `${calculateHeight(dataSet, dataSet[i])}vh`;
    }
  };

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
