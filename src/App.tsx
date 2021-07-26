import { useDataState } from './components/data-set/DataSetState';
import DataSetDisplay from './components/DataSetDisplay';
import SortAnimator from './components/sort/SortAnimator';
import Toolbar from './components/Toolbar';

const App = () => {
  // Manages the data set used for sorting
  const dataState = useDataState(100, 45);
  const animState = SortAnimator(dataState.dataSet);

  dataState.functions.setResetSorted(animState.functions.resetSorted);

  return (
    <div id="app">
      <DataSetDisplay
        dataSet={dataState.dataSet}
        statistics={animState.properties.statistics}
      />
      <Toolbar dataState={dataState} animState={animState} />
    </div>
  );
};

export default App;
