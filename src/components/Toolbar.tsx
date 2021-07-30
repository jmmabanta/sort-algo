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
  toggleInfoBox: (enabled?: boolean) => void;
};

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
        toggleInfoBox={props.toggleInfoBox}
      />
    </div>
  );
};

export default Toolbar;
