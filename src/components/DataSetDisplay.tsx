interface DataSetProps {
  dataSet: number[];
}

const MAX_HEIGHT = 45;

// Both calculateHeight and calculateWidth are used for CSS styling
// Measured in vh and vw
export const calculateHeight = (dataSet: number[], value: number) => {
  return (value * MAX_HEIGHT) / Math.max(...dataSet);
};

const calculateWidth = (dataSize: number, maxWidth: number) => {
  return maxWidth / (2 * (dataSize - 1));
};

const DataSetDisplay = (props: DataSetProps) => {
  let width = calculateWidth(props.dataSet.length, 60);
  return (
    <div className="data_container">
      <div className="data_set">
        {props.dataSet.map((value, index) => {
          return (
            <div
              className="data_bar"
              key={index}
              style={{
                height: `${calculateHeight(props.dataSet, value)}vh`,
                width: `${width}vw`,
                margin: `0 ${width}vw`
              }}
            ></div>
          );
        })}
      </div>
      <p>There are {props.dataSet.length} random elements in the data set.</p>
    </div>
  );
};

export default DataSetDisplay;
