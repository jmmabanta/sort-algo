import DataSetSize from './components/data-set/DataSetInputs';
import { useDataState } from './components/data-set/DataSetState';
import DataSetDisplay from './components/DataSetDisplay';
import SortDataButtons from './components/sort/SortDataInputs';
import SortAnimator from './components/sort/SortAnimator';

const App = () => {
  // Manages the data set used for sorting
  const dataState = useDataState(100, 45);
  const animState = SortAnimator(dataState.dataSet);

  dataState.setResetSorted(animState.resetSorted);

  return (
    <div id="app">
      <h3>
        There are {dataState.dataSet.length} random elements in the data set
      </h3>
      <div id="display">
        <DataSetDisplay dataSet={dataState.dataSet} />
      </div>
      <div id="inputs" className="show">
        <div>
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
        <DataSetSize
          dataSize={dataState}
          isDisabled={animState.animating}
          isSorted={animState.isSorted}
        />
        <SortDataButtons
          sortData={animState.sortData}
          setSpeed={animState.setBaseSpeed}
          isDisabled={animState.animating}
          isSorted={animState.isSorted}
        />
      </div>
    </div>
  );
};

export default App;
