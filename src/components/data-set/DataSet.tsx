interface DataSetProps {
  size: number;
}

const generateData = (size: number): number[] => {
  let data: number[] = [size];
  for (let i = 0; i < size; i++) {
    data[i] = Math.floor(Math.random() * 200) - 100;
  }
  return data;
};

const DataSet = (props: DataSetProps) => {
  const testArray = generateData(props.size);
  const display =
    '[' +
    testArray.map((num) => {
      return ' ' + num;
    }) +
    ' ]';
  return (
    <div>
      <h2>Data:</h2>
      <h3>{display}</h3>
    </div>
  );
};

export default DataSet;
