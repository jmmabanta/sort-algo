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

/**
 * @param props Necessary functions and state variables.
 * @returns The slider and buttons that affect the data set.
 */
const DataSetInputs = (props: DataProps) => {
  return (
    <div
      className="input_section"
      style={{ display: props.isDisabled ? 'none' : 'inline' }}
    >
      <h3>Generate Data:</h3>
      <input
        type="range"
        className="slider data"
        min={25}
        max={500}
        defaultValue={100}
        onInput={props.dataSize.handleChange}
        onChange={props.dataSize.handleChange}
        disabled={props.isDisabled}
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
          style={{
            display:
              !props.isSorted || props.isDisabled ? 'none' : 'inline-block',
            marginLeft: '1rem'
          }}
        >
          Undo Sort
        </button>
      </div>
    </div>
  );
};

export default DataSetInputs;
