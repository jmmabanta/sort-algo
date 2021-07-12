import { useState, useEffect } from 'react';

export type AlgorithmType = 'selection' | undefined;

const SortAnimator = () => {
  // State essentially toggles visibility of slider
  // A band-aid fix that stops user from changing data set
  // While its being sorted
  const [animating, setAnimating] = useState(false);

  // Hides data slider when 'animating'
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

  const sortData = (algorithm: AlgorithmType) => {
    switch (algorithm) {
      case 'selection':
        animateSelectionSort();
        break;
      default:
        console.log('No algorithm specified :/');
        break;
    }
  };

  /*
  SORTING ALGORITHM ANIMATIONS HERE
  */

  const animateSelectionSort = () => {
    setAnimating(true);
    setTimeout(() => {
      console.log('selection sorting');
      setAnimating(false);
    }, 2000);
  };

  return { sortData };
};

export default SortAnimator;
