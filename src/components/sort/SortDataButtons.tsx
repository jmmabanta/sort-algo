import { AlgorithmType } from './SortAnimator';

interface ButtonProps {
  sortData: (algorithm?: AlgorithmType) => void;
}

const SortDataButtons = (props: ButtonProps) => {
  return (
    <div id="sort_buttons">
      <button
        onClick={() => {
          props.sortData('selection');
        }}
      >
        Selection Sort Test
      </button>
      <button
        onClick={() => {
          props.sortData('insertion');
        }}
      >
        Insertion Sort Test
      </button>
    </div>
  );
};

export default SortDataButtons;
