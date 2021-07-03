interface DataSetProps {
  size: number;
}

const DataSet = (props: DataSetProps) => {
  return (
    <div>
      <h2>Size = {props.size}</h2>
    </div>
  );
};

export default DataSet;
