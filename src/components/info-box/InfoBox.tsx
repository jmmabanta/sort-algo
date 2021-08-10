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
  return (
    <div
      id="infobox"
      style={{ display: props.infoState.isEnabled ? 'flex' : 'none' }}
    >
      <div id="wikipedia">
        <iframe
          src={AlgoInfo[props.infoState.algoInfo].url}
          title={AlgoInfo[props.infoState.algoInfo].name}
        ></iframe>
      </div>
      <button onClick={() => props.infoState.toggleInfoBox(false)}>X</button>
      <h2>{AlgoInfo[props.infoState.algoInfo].name} Info</h2>
    </div>
  );
};
export default InfoBox;
