interface DataSetProps {
  dataSet: number[];
  size: number;
}

const DataSetDisplay = (props: DataSetProps) => {
  const display =
    '[' +
    props.dataSet.map((num) => {
      return ' ' + num;
    }) +
    ' ]';
  return (
    <div>
      <h2>Data:</h2>
      <h3>{display}</h3>
      <p>There are {props.size} random elements in the data set.</p>
    </div>
  );
};

export default DataSetDisplay;
