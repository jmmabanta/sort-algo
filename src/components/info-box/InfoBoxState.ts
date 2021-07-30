import { useState } from 'react';

const InfoBoxState = () => {
  const [isEnabled, setEnabled] = useState(false);

  const toggleInfoBox = (enabled?: boolean) => {
    if (enabled === undefined) setEnabled((e) => !e);
    else setEnabled(enabled);
  };

  return { isEnabled, toggleInfoBox };
};

export default InfoBoxState;
