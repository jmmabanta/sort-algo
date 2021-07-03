import "./App.css";
import DataSetSize from "./components/data-set-size/DataSetSize";
import { useDataSize } from "./components/data-set-size/SetDataSize";

const App = () => {
  // Manages the size of the data set to be sorted
  // Passed as prop to DataSetSize component
  const dataSize = useDataSize(2);

  return (
    <div className="App">
      <h1>Sorting Algorithms</h1>
      <h3>
        <i>*still a work in progress don't flame :(*</i>
      </h3>
      {/*This is the form that manages the size of the data array that is to be sorted
      (minimum size = 2) */}
      <DataSetSize dataSize={dataSize} />
    </div>
  );
};

export default App;
