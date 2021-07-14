import React from 'react';

interface DataProps {
  dataSize: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    regenerateNewData: () => void;
    undoSort: () => void;
  };
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  isSorted: boolean;
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
          disabled={props.isDisabled}
        />
        <button
          onClick={props.dataSize.regenerateNewData}
          disabled={props.isDisabled}
        >
          Make New Array
        </button>
        <button
          id="undo_sort"
          onClick={props.dataSize.undoSort}
          disabled={!props.isSorted || props.isDisabled}
        >
          Undo Sort
        </button>
      </div>
      <div id="set_speed">
        <b>Sort Speed: </b>
        <input
          type="range"
          min={0.1}
          max={1.0}
          step={0.1}
          defaultValue={0.5}
          onInput={props.setSpeed}
          onChange={props.setSpeed}
          disabled={props.isDisabled}
        ></input>
      </div>
    </div>
  );
};

export default DataSetSize;
