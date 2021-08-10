import React from 'react';
import DataSetInputs from './data-set/DataSetInputs';
import { AlgorithmType } from './sort/SortAnimator';
import SortDataInputs from './sort/SortDataInputs';
import TitleCard from './TitleCard';

type ToolbarProps = {
  dataState: {
    functions: {
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      regenerateNewData: () => void;
      undoSort: () => void;
    };
  };
  animState: {
    functions: {
      sortData: (algorithm?: AlgorithmType) => void;
      setBaseSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    properties: {
      animating: boolean;
      isSorted: boolean;
    };
  };
  infoState: {
    toggleInfoBox: (enabled?: boolean) => void;
    setAlgo: (algo: AlgorithmType) => void;
  };
};

/**
 * @param props Contains all of the functions and state necessary to
 * add functionality to all of the input fields.
 * @returns A toolbar of user inputs, found at the bottom of the screen,
 * or front and center on smaller screens.
 */
const Toolbar = (props: ToolbarProps) => {
  return (
    <div
      id="toolbar"
      className={props.animState.properties.animating ? 'hide' : 'show'}
    >
      <TitleCard />
      <DataSetInputs
        dataSize={props.dataState.functions}
        isDisabled={props.animState.properties.animating}
        isSorted={props.animState.properties.isSorted}
      />
      <SortDataInputs
        sortData={props.animState.functions.sortData}
        setSpeed={props.animState.functions.setBaseSpeed}
        isDisabled={props.animState.properties.animating}
        isSorted={props.animState.properties.isSorted}
        infoState={props.infoState}
      />
    </div>
  );
};

export default Toolbar;
