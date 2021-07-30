import { useState } from 'react';
import { AlgorithmType } from '../sort/SortAnimator';

const InfoBoxState = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [algoInfo, setAlgoInfo] = useState<AlgorithmType>('bubble');

  const toggleInfoBox = (enabled?: boolean) => {
    if (enabled === undefined) setEnabled((e) => !e);
    else setEnabled(enabled);
  };

  const setAlgo = (algo: AlgorithmType) => {
    setAlgoInfo(algo);
  };

  return { isEnabled, algoInfo, toggleInfoBox, setAlgo };
};

export default InfoBoxState;
