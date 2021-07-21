import { AlgorithmType } from './SortAnimator';

interface ButtonProps {
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortData: (algorithm?: AlgorithmType) => void;
  isSorted: boolean;
  isDisabled: boolean;
}

const SortDataInputs = (props: ButtonProps) => {
  return (
    <div className="input_section sort_section">
      <h3>Sort Speed:</h3>
      <input
        type="range"
        className="slider sort"
        min={0.1}
        max={1.0}
        step={0.00001}
        defaultValue={0.5}
        onInput={props.setSpeed}
        onChange={props.setSpeed}
        disabled={props.isDisabled}
      ></input>{' '}
      <div className="button_list sort_button">
        <select name="algos" id="algo-drop">
          <optgroup label="O(n²)">
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
          </optgroup>
          <optgroup label="O(n·log(n))">
            <option value="merge">Merge Sort</option>
          </optgroup>
        </select>
        <button disabled={props.isDisabled}>Sort Data</button>
      </div>
    </div>
  );
};

export default SortDataInputs;
