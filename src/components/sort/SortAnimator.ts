import React, { useState, useEffect } from 'react';
import { setIsSorted } from '../data-set/DataSetState';

import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';

export type AlgorithmType = 'selection' | 'insertion' | undefined;

// Main Colors
export const PRIMARY_COLOR = 'cornflowerblue';
const COMPARISON_COLOR = 'red';
const KEY_COLOR = 'fuchsia';
const SORTED_COLOR = 'palegreen';

let baseSpeed = 1;

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
    const userInputs = document.getElementById('data_form') as HTMLElement;
    if (animating) {
      userInputs.style.visibility = 'hidden';
    } else {
      userInputs.style.visibility = 'visible';
    }
  }, [animating]);

  const sortData = (algorithm?: AlgorithmType) => {
    setIsSorted(true);
    const sortButtons = document.getElementById('sort_buttons') as HTMLElement;
    sortButtons.style.visibility = 'hidden';
    switch (algorithm) {
      case 'selection':
        animateSelectionSort();
        break;
      case 'insertion':
        animateInsertionSort();
        break;
      default:
        setIsSorted(false);
        console.log('No algorithm specified :/');
        break;
    }
  };

  const setBaseSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    baseSpeed = 1 / parseFloat(e.target.value);
  };

  // Speed of animation (in ms)
  // Base speed is the speed in which a dataSet of length 100
  // goes at, and is then scaled to larger sizes
  const ANIMATION_SPEED = () => {
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

  // The final 'green' swipe of the data bars when things are done sorting
  const sortedAnimation = (dataBars: HTMLCollectionOf<HTMLElement>) => {
    for (let i = 0; i < dataBars.length; i++) {
      setTimeout(() => {
        dataBars[i].style.backgroundColor = SORTED_COLOR;
        if (i === dataBars.length - 1) setAnimating(false);
      }, i * (ANIMATION_SPEED() * 5));
    }
  };

  const animateSelectionSort = () => {
    setAnimating(true);
    const startTime = new Date();
    const animations = SelectionSort(dataSet);
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
          }, i * ANIMATION_SPEED());
          // Resets back to original color
          setTimeout(() => {
            barOneStyles.backgroundColor = PRIMARY_COLOR;
            barTwoStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * ANIMATION_SPEED());
          break;
        case 'swap':
          setTimeout(() => {
            const barOneHeight = barOneStyles.height;
            barOneStyles.height = barTwoStyles.height;
            barTwoStyles.height = barOneHeight;
            if (i === animations.length - 1) {
              const endTime = new Date();
              console.log(endTime.getTime() - startTime.getTime());
              sortedAnimation(dataBars);
            }
          }, i * ANIMATION_SPEED());
          break;
        default:
          // This should in theory never print
          console.log('Unknown operator??????');
          break;
      }
    }
  };

  const animateInsertionSort = () => {
    setAnimating(true);
    const animations = InsertionSort(dataSet);
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    const startTime = new Date();
    for (let i = 0; i < animations.length; i++) {
      const [type, barOneIndex] = animations[i];
      const barOneStyles = dataBars[barOneIndex as number].style;
      const barTwoStyles = dataBars[(barOneIndex as number) + 1].style;
      switch (type) {
        case 'compare':
          setTimeout(() => {
            barOneStyles.backgroundColor = COMPARISON_COLOR;
            barTwoStyles.backgroundColor = KEY_COLOR;
          }, i * ANIMATION_SPEED());
          setTimeout(() => {
            barOneStyles.backgroundColor = KEY_COLOR;
            barTwoStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * ANIMATION_SPEED());
          setTimeout(() => {
            barOneStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 2) * ANIMATION_SPEED());
          break;
        case 'swap':
          setTimeout(() => {
            const barOneHeight = barOneStyles.height;
            barOneStyles.height = barTwoStyles.height;
            barTwoStyles.height = barOneHeight;
            if (i === animations.length - 1) {
              const endTime = new Date();
              console.log(endTime.getTime() - startTime.getTime());
              sortedAnimation(dataBars);
            }
          }, i * ANIMATION_SPEED());
          break;
        default:
          console.log('Unknown operator??????');
          break;
      }
    }
  };

  return { sortData, setBaseSpeed };
};

export default SortAnimator;
