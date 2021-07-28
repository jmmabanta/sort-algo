import React from 'react';
import { AlgorithmType } from './SortAnimator';

type SortButtonsProps = {
  selectedAlgo: string;
  changeAlgo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sortProps: {
    sortData: (algorithm?: AlgorithmType) => void;
    isSorted: boolean;
    isDisabled: boolean;
  };
};

const SortButtons = (props: SortButtonsProps) => {
  return (
    <div className="button_list sort_button">
      <select
        name="algos"
        id="algo-drop"
        value={props.selectedAlgo}
        onChange={props.changeAlgo}
      >
        <optgroup label="O(n²)">
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </optgroup>
        <optgroup label="O(n·log(n))">
          <option value="merge">Merge Sort</option>
          <option value="quick_lom">Quick Sort (Lomuto Partitioning)</option>
          <option value="quick_hor">Quick Sort (Hoare Partitioning)</option>
        </optgroup>
      </select>
      <button onClick={() => alert('TODO: Add algorithm information box')}>
        Algo Info
      </button>
      <button
        onClick={() =>
          props.sortProps.sortData(props.selectedAlgo as AlgorithmType)
        }
        disabled={props.sortProps.isDisabled || props.sortProps.isSorted}
        style={{
          display:
            props.sortProps.isDisabled || props.sortProps.isSorted
              ? 'none'
              : 'inline'
        }}
      >
        Sort Data
      </button>
    </div>
  );
};

export default SortButtons;
