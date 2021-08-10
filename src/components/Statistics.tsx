type StatisticsProps = {
  statistics: {
    comparisons: number;
    swaps: number;
  };
  length: number;
};

/**
 * @param props Containes information about the data set's size,
 * as well as the number of comparisons and swaps during sorting.
 * @returns A small two-line piece of text showing information about
 * the data set.
 */
const Statistics = (props: StatisticsProps) => {
  return (
    <div className="statistics">
      <h3>There are {props.length} random elements in the data set</h3>
      <h4>
        Comparisons: {props.statistics.comparisons} | Swaps & Insertions:{' '}
        {props.statistics.swaps}
      </h4>
    </div>
  );
};

export default Statistics;
