import Statistics from '../Statistics';

interface DataSetProps {
  dataSet: number[];
  statistics: {
    comparisons: number;
    swaps: number;
  };
}

const MAX_HEIGHT = 72;

/**
 * Calculates the height for a given data point and its respective bar.
 * @param dataSet The current data set.
 * @param value The value of the element within the data set.
 * @returns A height value (in vh) to be applied to the data bar in CSS.
 */
export const calculateHeight = (dataSet: number[], value: number) => {
  return (value * MAX_HEIGHT) / Math.max(...dataSet);
};

/**
 * Calculates the width for each data bar.
 * @param dataSize The number of points in the data set.
 * @param maxWidth The maximum width (in vw) of the whold bar graph.
 * @returns A width value (in vw) to be applied to the data bar in CSS.
 */
const calculateWidth = (dataSize: number, maxWidth: number) => {
  return maxWidth / (1.1 * (dataSize - 1));
};

/**
 * Generates the 'bar graph'/display of data points.
 * @param props Contains information about the data set,
 * as well as the number of comparisons and swaps during sorting.
 * @returns A bar graph representing all of the data points in the set.
 */
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
