import DataSetSize from './components/data-set/DataSetSize';
import { useDataState } from './components/data-set/DataSetState';
import DataSetDisplay from './components/data-set/DataSetDisplay';
import SortData from './components/sort/SortData';

const App = () => {
  // Manages the data set used for sorting
  const dataState = useDataState(6);

  return (
    <div className="App">
      <h1>Sorting Algorithms</h1>
      <h3>
        <i>*still a work in progress don't flame :(*</i>
      </h3>
      <DataSetSize dataSize={dataState} />
      <DataSetDisplay dataSet={dataState.dataSet} />
      <SortData sortData={dataState.sortData} />
    </div>
  );
};

export default App;
