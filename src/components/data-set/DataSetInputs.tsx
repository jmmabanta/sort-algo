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
    <div className="input_section">
      <h3>Generate Data:</h3>
      <input
        type="range"
        className="slider data"
        min={100}
        max={500}
        defaultValue={100}
        onInput={props.dataSize.handleChange}
        onChange={props.dataSize.handleChange}
        disabled={props.isSorted}
      />
      <div className="button_list array_button">
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
