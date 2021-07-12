import DataSetSize from './components/data-set/DataSetSize';
import { useDataState } from './components/data-set/DataSetState';
import DataSetDisplay from './components/DataSetDisplay';
import SortDataButtons from './components/sort/SortDataButtons';
import SortAnimator from './components/sort/SortAnimator';

const App = () => {
  // Manages the data set used for sorting
  const dataState = useDataState(100, 45);

  const animState = SortAnimator(dataState.dataSet);

  return (
    <div className="App">
      <h1>Sorting Algorithms</h1>
      <h3>
        <i>*still a work in progress don't flame :(*</i>
      </h3>
      <DataSetDisplay dataSet={dataState.dataSet} />
      <DataSetSize dataSize={dataState} />
      <SortDataButtons sortData={animState.sortData} />
    </div>
  );
};

export default App;
