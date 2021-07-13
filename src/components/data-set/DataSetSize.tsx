import React from 'react';

interface DataProps {
  dataSize: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    regenerateNewData: () => void;
  };
}

const DataSetSize = (props: DataProps) => {
  return (
    <div id="data_size_form">
      <b>Generate Data: </b>
      <input
        type="range"
        name="data_size"
        min={100}
        max={500}
        step={10}
        defaultValue={100}
        onInput={props.dataSize.handleChange}
        onChange={props.dataSize.handleChange}
      />
      <button onClick={props.dataSize.regenerateNewData}>🔄️</button>
    </div>
  );
};

export default DataSetSize;
