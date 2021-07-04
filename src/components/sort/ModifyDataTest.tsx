import selectionSort from './SelectionSort';

interface ModifyProps {
  sortData: (sortAlgo: (dataSet: number[]) => number[]) => void;
}

const ModifyDataTest = (props: ModifyProps) => {
  const testUpdate = () => {
    props.sortData(selectionSort);
  };
  return (
    <div>
      <button onClick={testUpdate}>Selection Sort Test</button>
    </div>
  );
};

export default ModifyDataTest;
