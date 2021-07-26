import React from 'react';
import DataSetInputs from './data-set/DataSetInputs';
import { AlgorithmType } from './sort/SortAnimator';
import SortDataInputs from './sort/SortDataInputs';

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
};

const Toolbar = (props: ToolbarProps) => {
  return (
    <div
      id="toolbar"
      className={props.animState.properties.animating ? 'hide' : 'show'}
    >
      <div id="title">
        <h1>Sorting Algorithms</h1>
        <h4>
          <i>WARNING: Animation contains flashing lights</i>
        </h4>
        <h5>
          © 2021 John Marcus Mabanta ·{' '}
          <a
            href="https://github.com/jmmabanta/sort-algo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </h5>
      </div>
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
      />
    </div>
  );
};

export default Toolbar;
