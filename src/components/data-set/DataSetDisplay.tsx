interface DataSetProps {
  dataSet: number[];
}

const DataSetDisplay = (props: DataSetProps) => {
  const display =
    '[' +
    props.dataSet.map((num, index) => {
      return ' ' + index + ': ' + num;
    }) +
    ' ]';
  return (
    <div className="data_container">
      <h2>Data:</h2>
      <h3>{display}</h3>
      <p>There are {props.dataSet.length} random elements in the data set.</p>
    </div>
  );
};

export default DataSetDisplay;
