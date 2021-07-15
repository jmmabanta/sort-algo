import { AlgorithmType } from './SortAnimator';

interface ButtonProps {
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortData: (algorithm?: AlgorithmType) => void;
  isSorted: boolean;
  isDisabled: boolean;
}

const SortDataButtons = (props: ButtonProps) => {
  return (
    <div>
      <div id="set_speed">
        Sort Speed:
        <div>
          <input
            type="range"
            min={0.1}
            max={1.0}
            step={0.1}
            defaultValue={0.5}
            onInput={props.setSpeed}
            onChange={props.setSpeed}
            disabled={props.isDisabled}
          ></input>{' '}
        </div>
      </div>
      <div id="sort_buttons">
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
      </div>
    </div>
  );
};

export default SortDataButtons;
