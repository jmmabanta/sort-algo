import React from 'react';

interface DataProps {
  dataSize: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    regenerateNewData: () => void;
    undoSort: () => void;
  };
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DataSetSize = (props: DataProps) => {
  return (
    <div id="data_form">
      <div id="set_size">
        <b>Generate Data: </b>
        <input
          type="range"
          name="data_size"
          min={100}
          max={500}
          step={50}
          defaultValue={100}
          onInput={props.dataSize.handleChange}
          onChange={props.dataSize.handleChange}
        />
        <button onClick={props.dataSize.regenerateNewData}>
          Make New Array
        </button>
        <button
          id="undo_sort"
          style={{ visibility: 'hidden' }}
          onClick={props.dataSize.undoSort}
        >
          Undo Sort
        </button>
      </div>
      <div id="set_speed">
        <b>Sort Speed: </b>
        <input
          type="range"
          min={0.2}
          max={2.0}
          step={0.1}
          defaultValue={1}
          onInput={props.setSpeed}
          onChange={props.setSpeed}
        ></input>
      </div>
    </div>
  );
};

export default DataSetSize;
