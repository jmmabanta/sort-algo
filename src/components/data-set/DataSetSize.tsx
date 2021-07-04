import React from 'react';

interface DataProps {
  dataSize: {
    size: number;
    incrementSize: (delta: number) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const DataSetSize = (props: DataProps) => {
  return (
    <div className="data-size-form">
      <h2>Data Set Size:</h2>
      <input
        name="dataSize"
        value={props.dataSize.size}
        onChange={props.dataSize.handleChange}
      ></input>
      <div className="data-size-form-buttons">
        <button onClick={() => props.dataSize.incrementSize(-1)}>-</button>
        <button onClick={() => props.dataSize.incrementSize(1)}>+</button>
      </div>
    </div>
  );
};

export default DataSetSize;
