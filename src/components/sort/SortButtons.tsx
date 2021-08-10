import React from 'react';
import { AlgorithmType } from './SortAnimator';

type SortButtonsProps = {
  selectedAlgo: AlgorithmType;
  changeAlgo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sortProps: {
    sortData: (algorithm?: AlgorithmType) => void;
    isSorted: boolean;
    isDisabled: boolean;
    infoState: {
      toggleInfoBox: (enabled?: boolean) => void;
      setAlgo: (algo: AlgorithmType) => void;
    };
  };
};

/**
 * @param props Contains multiple functions triggered by the slider,
 * as well as properties (selectedAlgo, isSorted & isDisabled) to
 * determine behavior.
 * @returns The input box that contains inputs which manipulate sorting.
 */
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
          <option value="heap">Heap Sort</option>
        </optgroup>
      </select>
      <button
        onClick={() => {
          props.sortProps.infoState.setAlgo(props.selectedAlgo);
          props.sortProps.infoState.toggleInfoBox();
        }}
      >
        Algo Info
      </button>
      <button
        onClick={() => props.sortProps.sortData(props.selectedAlgo)}
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
