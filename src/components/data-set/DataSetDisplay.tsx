import Statistics from '../Statistics';

interface DataSetProps {
  dataSet: number[];
  statistics: {
    comparisons: number;
    swaps: number;
  };
}

const MAX_HEIGHT = 72;

// Both calculateHeight and calculateWidth are used for CSS styling
// Measured in vh and vw
export const calculateHeight = (dataSet: number[], value: number) => {
  return (value * MAX_HEIGHT) / Math.max(...dataSet);
};

const calculateWidth = (dataSize: number, maxWidth: number) => {
  return maxWidth / (1.1 * (dataSize - 1));
};

const DataSetDisplay = (props: DataSetProps) => {
  let width = calculateWidth(props.dataSet.length, 85);
  return (
    <div className="data_container">
      <Statistics statistics={props.statistics} length={props.dataSet.length} />
      <div className="data_set">
        {props.dataSet.map((value, index) => {
          return (
            <div
              className="data_bar"
              key={index}
              style={{
                height: `${calculateHeight(props.dataSet, value)}vh`,
                width: `${width}vw`,
                margin: `0 ${width / 10}vw`
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default DataSetDisplay;
