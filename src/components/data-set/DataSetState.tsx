/* The state manager for the data set size */

import React, { useState } from 'react';

// Defines types for the hook
type DataSizeType = {
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
  const [dataSet, setDataSet] = useState(generateData(initialValue));

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataSet((oldData) => generateData(parseInt(e.target.value)));
  };

  const sortData = (sortAlgo: SortingAlgorithm) => {
    setDataSet((e) => sortAlgo(e));
  };

  return { handleChange, dataSet, sortData };
};
