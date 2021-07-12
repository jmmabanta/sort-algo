import { useState, useEffect } from 'react';

export const animateSelectionSort = () => {};

const SortAnimator = () => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const dataSizeSlider = document.getElementsByClassName(
      'data_size_form'
    )[0] as HTMLElement;
    if (animating) {
      console.log('Currently Animating');
      dataSizeSlider.style.visibility = 'hidden';
    } else {
      console.log('Animating Stopped');
      dataSizeSlider.style.visibility = 'visible';
    }
  }, [animating]);

  const toggleAnimating = () => {
    setAnimating((a) => !a);
  };

  return { toggleAnimating };
};

export default SortAnimator;
