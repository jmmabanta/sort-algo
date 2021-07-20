import { AlgorithmType } from './SortAnimator';

interface ButtonProps {
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortData: (algorithm?: AlgorithmType) => void;
  isSorted: boolean;
  isDisabled: boolean;
}

const SortDataButtons = (props: ButtonProps) => {
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
        <button
          onClick={() => {
            props.sortData('selection');
          }}
          disabled={props.isSorted}
        >
          Selection Sort
        </button>
        <button
          onClick={() => {
            props.sortData('insertion');
          }}
          disabled={props.isSorted}
        >
          Insertion Sort
        </button>
        <button
          onClick={() => {
            props.sortData('merge');
          }}
          disabled={props.isSorted}
        >
          Merge Sort
        </button>
      </div>
    </div>
  );
};

export default SortDataButtons;