import React from 'react';

interface DataProps {
  dataSize: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    regenerateNewData: () => void;
    undoSort: () => void;
  };
  isDisabled: boolean;
  isSorted: boolean;
}

const DataSetSize = (props: DataProps) => {
  return (
    <div id="data_form">
      <div id="set_size">
        <h3>Generate Data:</h3>
        <div>
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
        </div>
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
    </div>
  );
};

export default DataSetSize;
