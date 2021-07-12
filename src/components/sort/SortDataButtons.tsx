interface ButtonProps {
  toggleAnim: () => void;
}

const SortDataButtons = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.toggleAnim}>Selection Sort Test</button>
    </div>
  );
};

export default SortDataButtons;
