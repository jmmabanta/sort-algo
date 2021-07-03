/* The state manager for the data set size */

import React, { useState } from "react";

// Defines types for the hook
interface DataSizeType {
  value: number;
  add: () => void;
  subtract: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useDataSize = (initialValue: number): DataSizeType => {
  const [value, setValue] = useState(initialValue);

  // Used for the + and - buttons
  const add = () => setValue((e) => e + 1);
  const subtract = () => setValue((e) => (e > 2 ? e - 1 : 2));

  // Used for direct user input in the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexCheck = /^[0-9\b]+$/; // Checks if input is a valid number
    if (
      e.target.value === "" ||
      (regexCheck.test(e.target.value) && parseInt(e.target.value) >= 2)
    )
      setValue(parseInt(e.target.value) || 2);
  };

  return { value, add, subtract, handleChange };
};
