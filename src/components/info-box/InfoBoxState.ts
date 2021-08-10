import { useState } from 'react';
import { AlgorithmType } from '../sort/SortAnimator';

/**
 * Manages the current algorithm selected in order to display
 * their information in the info box.
 * @returns An object which contains both states, and functions
 * to modify these states.
 */
const InfoBoxState = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [algoInfo, setAlgoInfo] = useState('bubble');

  const toggleInfoBox = (enabled?: boolean) => {
    if (enabled === undefined) setEnabled((e) => !e);
    else setEnabled(enabled);
  };

  const setAlgo = (algo: AlgorithmType) => {
    setAlgoInfo(algo as string);
  };

  return { isEnabled, algoInfo, toggleInfoBox, setAlgo };
};

export default InfoBoxState;
