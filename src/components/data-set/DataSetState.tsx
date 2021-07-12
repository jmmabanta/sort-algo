/* The state manager for the data set size */

import React, { useState } from 'react';

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

export const useDataState = (
  initialValue: number,
  height: number
): DataSizeType => {
  const [dataSet, setDataSet] = useState(generateData(initialValue, height));

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataSet((oldData) => generateData(parseInt(e.target.value), height));
  };

  return { handleChange, dataSet };
};
