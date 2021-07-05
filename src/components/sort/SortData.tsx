import selectionSort from './algorithms/SelectionSort';

interface SortProps {
  sortData: (sortAlgo: (dataSet: number[]) => number[]) => void;
}

const SortData = (props: SortProps) => {
  return (
    <div>
      <button onClick={() => props.sortData(selectionSort)}>Selection Sort Test</button>
    </div>
  );
};

export default SortData;
