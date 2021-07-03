import React from "react";

interface DataProps {
  dataSize: {
    value: number;
    add: () => void;
    subtract: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const DataSetSize = (props: DataProps) => {
  return (
    <div className="data-size-form">
      <h2>Data Set Size:</h2>
      <input
        name="dataSize"
        value={props.dataSize.value}
        onChange={props.dataSize.handleChange}
      ></input>
      <div className="data-size-form-buttons">
        <button onClick={props.dataSize.subtract}>-</button>
        <button onClick={props.dataSize.add}>+</button>
      </div>
    </div>
  );
};

export default DataSetSize;
