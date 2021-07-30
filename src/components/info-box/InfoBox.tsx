type InfoBoxProps = {
  infoState: {
    isEnabled: boolean;
    toggleInfoBox: (enabled?: boolean) => void;
  };
};

const InfoBox = (props: InfoBoxProps) => {
  return (
    <div
      id="infobox"
      style={{ display: props.infoState.isEnabled ? 'flex' : 'none' }}
    >
      <h1>TODO: Finish Info Box</h1>
      <button onClick={() => props.infoState.toggleInfoBox(false)}>
        Close Info Box
      </button>
    </div>
  );
};

export default InfoBox;
