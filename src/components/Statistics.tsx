type StatisticsProps = {
  statistics: {
    comparisons: number;
    swaps: number;
  };
  length: number;
};

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
