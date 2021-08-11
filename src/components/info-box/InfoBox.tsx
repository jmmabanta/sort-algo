import AlgoInfo from './AlgoInfo';

type InfoBoxProps = {
  infoState: {
    isEnabled: boolean;
    algoInfo: string;
    toggleInfoBox: (enabled?: boolean) => void;
  };
};

/**
 * @param props Contains the state variables of InfoBoxState,
 * and a function to turn off the info box.
 * @returns An information box that includes a wikipedia iframe
 * of the currently selected sorting algorithm.
 */
const InfoBox = (props: InfoBoxProps) => {
  const algorithm = AlgoInfo[props.infoState.algoInfo];
  return (
    <div
      id="infobox"
      style={{ display: props.infoState.isEnabled ? 'flex' : 'none' }}
    >
      <div id="wikipedia">
        <iframe src={algorithm.url} title={algorithm.name}></iframe>
      </div>
      <button onClick={() => props.infoState.toggleInfoBox(false)}>X</button>
      <h2>{algorithm.name} Info</h2>
      <h4>
        <i>
          Worst Case: {algorithm.worst} · Average Case: {algorithm.avg} · Best
          Case: {algorithm.best}
        </i>
      </h4>
    </div>
  );
};
export default InfoBox;
