import AlgoInfo from './AlgoInfo';

type InfoBoxProps = {
  infoState: {
    isEnabled: boolean;
    algoInfo: string;
    toggleInfoBox: (enabled?: boolean) => void;
  };
};

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
