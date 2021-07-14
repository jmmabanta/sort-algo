import DataSetSize from './components/data-set/DataSetInputs';
import { useDataState } from './components/data-set/DataSetState';
import DataSetDisplay from './components/DataSetDisplay';
import SortDataButtons from './components/sort/SortDataButtons';
import SortAnimator from './components/sort/SortAnimator';

const App = () => {
  // Manages the data set used for sorting
  const dataState = useDataState(100, 45);
  const animState = SortAnimator(dataState.dataSet);

  dataState.setResetSorted(animState.resetSorted);

  return (
    <div id="app">
      <div id="inputs" className="show">
        <h1>Sorting Algorithms</h1>
        <p>
          There are {dataState.dataSet.length} random elements in the data set.
        </p>
        <DataSetSize
          dataSize={dataState}
          setSpeed={animState.setBaseSpeed}
          isDisabled={animState.animating}
          isSorted={animState.isSorted}
        />
        <SortDataButtons
          sortData={animState.sortData}
          isSorted={animState.isSorted}
        />
      </div>
      <div id="display">
        <DataSetDisplay dataSet={dataState.dataSet} />
      </div>
    </div>
  );
};

export default App;
