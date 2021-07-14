import { AlgorithmType } from './SortAnimator';

interface ButtonProps {
  sortData: (algorithm?: AlgorithmType) => void;
  isSorted: boolean;
}

const SortDataButtons = (props: ButtonProps) => {
  return (
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
  );
};

export default SortDataButtons;
