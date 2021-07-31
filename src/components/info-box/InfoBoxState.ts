import { useState } from 'react';
import { AlgorithmType } from '../sort/SortAnimator';

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
