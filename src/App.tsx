import "./App.css";
import { useDataSize } from "./components/SetDataSize";

const App = () => {
  const [value, add, subtract, handleChange] = useDataSize(1);

  return (
    <div className="App">
      <h1>Sorting Algorithms</h1>
      <h3>
        <i>*still a work in progress don't flame :(*</i>
      </h3>
      <div className="data-size-form">
        <input name="dataSize" value={value} onChange={handleChange}></input>
        <div className="data-size-form-buttons">
          <button onClick={subtract}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
