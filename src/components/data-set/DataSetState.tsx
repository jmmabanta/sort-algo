import React, { useState } from 'react';
import { PRIMARY_COLOR } from '../sort/SortAnimator';

// Defines types for the hook
type DataSizeType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataSet: number[];
};

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
};

export const getIsSorted = () => isSorted;

export const useDataState = (
  initialValue: number,
  height: number
): DataSizeType => {
  const [dataSet, setDataSet] = useState(generateData(initialValue, height));

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    setDataSet((oldData) => generateData(newSize, height));
    if (isSorted) {
      resetStyling();
      const sortButtons = document.getElementById(
        'sort_buttons'
      ) as HTMLElement;
      sortButtons.style.visibility = 'visible';
      isSorted = false;
    }
  };

  const resetStyling = () => {
    console.log('RESETTING STYLES!!!!');
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < dataBars.length; i++) {
      dataBars[i].style.backgroundColor = PRIMARY_COLOR;
    }
  };

  return { handleChange, dataSet };
};
