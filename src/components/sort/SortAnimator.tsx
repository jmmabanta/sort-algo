import { useState, useEffect } from 'react';
import selectionSort from './algorithms/SelectionSort';

export type AlgorithmType = 'selection' | undefined;

// Main Colors
const PRIMARY_COLOR = 'cornflowerblue';
const COMPARISON_COLOR = 'red';
const SORTED_COLOR = 'palegreen';

// Base Animation Speed (speed for a data set size of 100)
// Make this a slider later
const BASE_SPEED = 1;

const SortAnimator = (dataSet: number[]) => {
  /*
  State essentially toggles visibility of slider
  A band-aid fix that stops user from changing data set
  While its being sorted
  */
  const [animating, setAnimating] = useState(false);

  /*
  Hides all forms of user interaction with the data set during animation:
    - Slider that controls size
    - Buttons that sort the set
  Currently unused, implement later when selection sort animation works.
  */
  useEffect(() => {
    const userInputs = document.getElementById('user_inputs') as HTMLElement;
    if (animating) {
      console.log('Currently Animating');
      userInputs.style.visibility = 'hidden';
    } else {
      console.log('Animating Stopped');
      userInputs.style.visibility = 'visible';
    }
  }, [animating]);

  const sortData = (algorithm?: AlgorithmType) => {
    switch (algorithm) {
      case 'selection':
        animateSelectionSort();
        break;
      default:
        console.log('No algorithm specified :/');
        break;
    }
  };

  // Speed of animation (in ms)
  // Base speed is the speed in which a dataSet of length 100
  // goes at, and is then scaled to larger sizes
  const ANIMATION_SPEED = (baseSpeed: number) => {
    const multiplier = dataSet.length / 100;
    return baseSpeed / (multiplier * multiplier);
  };

  /*
  SORTING ALGORITHM ANIMATIONS HERE

  =========================================================

  ALL SORTING ALGORITHMS RETURN AN 'ANIMATION' ARRAY:
  An animation array is a 2D array that contains the steps
  done in animating the sorting.

  Each element is array that containes the following values:
    - type: string = The kind of operator it is
      - For example, in selection sort: type can be 'compare' or 'swap'
    - indexOne: number = The first bar
    - indexTwo: number = The second bar

  Sorting then utilizes each element of the animation array to modify the
  CSS styling of the bars to demonstrate the sorting.
  */

  const animateSelectionSort = () => {
    setAnimating(true);
    const animations = selectionSort(dataSet);
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < animations.length; i++) {
      const [type, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyles = dataBars[barOneIndex as number].style;
      const barTwoStyles = dataBars[barTwoIndex as number].style;
      switch (type) {
        case 'compare':
          // Sets to comparison color
          setTimeout(() => {
            barOneStyles.backgroundColor = COMPARISON_COLOR;
            barTwoStyles.backgroundColor = COMPARISON_COLOR;
          }, i * ANIMATION_SPEED(BASE_SPEED));
          // Resets back to original color
          setTimeout(() => {
            barOneStyles.backgroundColor = PRIMARY_COLOR;
            barTwoStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * ANIMATION_SPEED(BASE_SPEED));
          break;
        case 'swap':
          setTimeout(() => {
            const barOneHeight = barOneStyles.height;
            barOneStyles.height = barTwoStyles.height;
            barTwoStyles.height = barOneHeight;
            barOneStyles.backgroundColor = SORTED_COLOR;
            if (i === animations.length - 1) {
              dataBars[dataBars.length - 1].style.backgroundColor =
                SORTED_COLOR;
              setAnimating(false);
            }
          }, i * ANIMATION_SPEED(BASE_SPEED));
          break;
        default:
          // This should in theory never print
          console.log('Unknown operator??????');
          break;
      }
    }
  };

  return { sortData };
};

export default SortAnimator;
