import React, { useState } from 'react';
import { PRIMARY_COLOR } from '../sort/SortAnimator';
import { calculateHeight } from '../DataSetDisplay';

// Generates random data
const generateData = (size: number, height: number): number[] => {
  let data: number[] = [size];
  for (let i = 0; i < size; i++) {
    data[i] = Math.random() * height + 1;
  }
  return data;
};

let isSorted = false;

export const setIsSorted = (value: boolean) => {
  isSorted = value;
  if (isSorted) {
    const undoSortButton = document.getElementById('undo_sort') as HTMLElement;
    undoSortButton.style.visibility = 'visible';
  }
};

export const getIsSorted = () => isSorted;

export const useDataState = (initialValue: number, height: number) => {
  const [dataSet, setDataSet] = useState(generateData(initialValue, height));

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
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
    if (!isSorted) return;
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    const sortButtons = document.getElementById('sort_buttons') as HTMLElement;
    const undoSortButton = document.getElementById('undo_sort') as HTMLElement;
    for (let i = 0; i < dataBars.length; i++)
      dataBars[i].style.backgroundColor = PRIMARY_COLOR;
    sortButtons.style.visibility = 'visible';
    undoSortButton.style.visibility = 'hidden';
    isSorted = false;
  };

  return { handleChange, regenerateNewData, undoSort, dataSet };
};
