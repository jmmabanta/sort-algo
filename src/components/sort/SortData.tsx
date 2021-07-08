import selectionSort from './algorithms/SelectionSort';
import { SortingAlgorithm } from './../data-set/DataSetState';

interface SortProps {
  sortData: (sortAlgo: SortingAlgorithm) => void;
}

const SortData = (props: SortProps) => {
  return (
    <div>
      <button onClick={() => props.sortData(selectionSort)}>Selection Sort Test</button>
    </div>
  );
};

export default SortData;
