import React, { useState } from "react";

export const useDataSize = (initialValue: number): any[] => {
  const [value, setValue] = useState(initialValue);

  const add = () => setValue((e) => e + 1);
  const subtract = () => setValue((e) => (e > 1 ? e - 1 : 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexCheck = /^[0-9\b]+$/;
    if (
      e.target.value === "" ||
      (regexCheck.test(e.target.value) && parseInt(e.target.value) >= 1)
    )
      setValue(parseInt(e.target.value));
  };

  return [value, add, subtract, handleChange];
};
