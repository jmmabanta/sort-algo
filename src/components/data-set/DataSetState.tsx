/* The state manager for the data set size */

import React, { useState } from 'react';

// Defines types for the hook
type DataSizeType = {
  size: number;
  incrementSize: (delta: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataSet: number[];
  sortData: (sortAlgo: SortingAlgorithm) => void;
};

type SortingAlgorithm = (dataSet: number[]) => number[];

// Generates random data
const generateData = (size: number): number[] => {
  let data: number[] = [size];
  for (let i = 0; i < size; i++) {
    data[i] = Math.random() * 45 + 1;
  }
  return data;
};

export const useDataState = (initialValue: number): DataSizeType => {
  const [size, setSize] = useState(initialValue);
  const [dataSet, setDataSet] = useState(generateData(size));

  // Used for buttons
  const incrementSize = (delta: number) => {
    setSize((e) => {
      let newSize = e;
      if (delta > 0) {
        newSize += delta;
      } else {
        newSize = newSize > delta * -1 + 15 ? newSize + delta : 15;
      }
      setDataSet(generateData(newSize));
      return newSize;
    });
  };

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexCheck = /^[0-9\b]+$/; // Checks if input is a valid number
    if (
      e.target.value === '' ||
      (regexCheck.test(e.target.value) && parseInt(e.target.value) >= 1)
    ) {
      const newValue = parseInt(e.target.value) > 15 ? parseInt(e.target.value) : 15;
      setSize(newValue);
      setDataSet(generateData(newValue));
    }
  };

  const sortData = (sortAlgo: SortingAlgorithm) => {
    setDataSet((e) => sortAlgo(e));
  };

  return { size, incrementSize, handleChange, dataSet, sortData };
};
