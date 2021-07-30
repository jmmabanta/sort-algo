import React, { useState } from 'react';
import { AlgorithmType } from './SortAnimator';
import SortButtons from './SortButtons';

interface ButtonProps {
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortData: (algorithm?: AlgorithmType) => void;
  isSorted: boolean;
  isDisabled: boolean;
  infoState: {
    toggleInfoBox: (enabled?: boolean) => void;
    setAlgo: (algo: AlgorithmType) => void;
  };
}

const SortDataInputs = (props: ButtonProps) => {
  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmType>('bubble');

  const changeAlgo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.infoState.setAlgo(e.target.value as AlgorithmType);
    setSelectedAlgo(e.target.value as AlgorithmType);
  };

  return (
    <div
      className="input_section sort_section"
      style={{ display: props.isDisabled ? 'none' : 'inline' }}
    >
      <h3>Sort Speed:</h3>
      <input
        type="range"
        className="slider sort"
        min={0.1}
        max={1.0}
        step={0.00001}
        defaultValue={0.5}
        onInput={props.setSpeed}
        onChange={props.setSpeed}
        disabled={props.isDisabled}
      ></input>
      <SortButtons
        selectedAlgo={selectedAlgo}
        changeAlgo={changeAlgo}
        sortProps={props}
      />
    </div>
  );
};

export default SortDataInputs;
