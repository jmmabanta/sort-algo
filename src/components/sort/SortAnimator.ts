import React, { useState } from 'react';

import { calculateHeight } from '../DataSetDisplay';

import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';

export type AlgorithmType = 'selection' | 'insertion' | 'merge' | undefined;

// Main Colors
export const PRIMARY_COLOR = 'steelblue';
const COMPARISON_COLOR = 'yellow';
const KEY_COLOR = 'magenta';
const KEY_COLOR_TWO = 'crimson';
const SORTED_COLOR = 'seagreen';

let baseSpeed = 2;

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

const SortAnimator = (dataSet: number[]) => {
  // States used to disable user input
  const [animating, setAnimating] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const resetSorted = () => {
    setIsSorted(false);
  };

  const sortData = (algorithm?: AlgorithmType) => {
    switch (algorithm) {
      case 'selection':
        animateSelectionSort();
        break;
      case 'insertion':
        animateInsertionSort();
        break;
      case 'merge':
        animateMergeSort();
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

  Note: All animations use a bunch of setTimeouts
    - Yes, I know it looks horrible, I just don't know any other alternative
  */

  // The final 'green' swipe of the data bars when things are done sorting
  const sortedAnimation = (dataBars: HTMLCollectionOf<HTMLElement>) => {
    const animSpeed = clamp(ANIMATION_SPEED(), 1, 50);
    for (let i = 0; i < dataBars.length; i++) {
      setTimeout(() => {
        dataBars[i].style.backgroundColor = SORTED_COLOR;
        if (i === dataBars.length - 1) {
          setTimeout(() => {
            setAnimating(false);
            setIsSorted(true);
          }, 1000);
        }
      }, i * animSpeed);
    }
  };

  const animateSelectionSort = () => {
    setAnimating(true);
    setIsSorted(true);
    const speed = ANIMATION_SPEED();
    const animations = SelectionSort(dataSet);
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    // Key: the element to be swapped with the minimum
    let lastKeyIndex = 0;
    dataBars[0].style.backgroundColor = KEY_COLOR_TWO;
    for (let i = 0; i < animations.length; i++) {
      const [type, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyles = dataBars[barOneIndex as number].style;
      const barTwoStyles = dataBars[barTwoIndex as number].style;
      switch (type) {
        case 'key':
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            if (lastKeyIndex !== (barOneIndex as number)) {
              dataBars[lastKeyIndex as number].style.backgroundColor =
                PRIMARY_COLOR;
              barOneStyles.backgroundColor = KEY_COLOR_TWO;
              lastKeyIndex = barOneIndex as number;
            }
            // The (i - 0.001) makes sure this executes
            // before the other timeouts
            // Yes, it is really jank :/
          }, (i - 0.001) * speed);
          break;
        case 'compare':
          // Sets to comparison color
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            if (barOneIndex !== lastKeyIndex)
              barOneStyles.backgroundColor = KEY_COLOR;
            barTwoStyles.backgroundColor = COMPARISON_COLOR;
          }, i * speed);
          // Resets back to original color
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            if (barOneIndex !== lastKeyIndex)
              barOneStyles.backgroundColor = PRIMARY_COLOR;
            barTwoStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * speed);
          break;
        case 'swap':
          setTimeout(() => {
            const barOneHeight = barOneStyles.height;
            barOneStyles.height = barTwoStyles.height;
            barTwoStyles.height = barOneHeight;
            if (i === animations.length - 1) {
              barOneStyles.backgroundColor = PRIMARY_COLOR;
              sortedAnimation(dataBars);
            }
          }, i * speed);
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
    setIsSorted(true);
    const speed = ANIMATION_SPEED();
    const animations = InsertionSort(dataSet);
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < animations.length; i++) {
      const [type, barOneIndex] = animations[i];
      const barOneStyles = dataBars[barOneIndex as number].style;
      const barTwoStyles = dataBars[(barOneIndex as number) + 1].style;
      switch (type) {
        case 'key':
          setTimeout(() => {
            dataBars[(barOneIndex as number) - 1].style.backgroundColor =
              PRIMARY_COLOR;
            barOneStyles.backgroundColor = KEY_COLOR_TWO;
          }, i * speed);
          break;
        case 'compare':
          setTimeout(() => {
            barOneStyles.backgroundColor = COMPARISON_COLOR;
            if (barTwoStyles.backgroundColor !== KEY_COLOR_TWO)
              barTwoStyles.backgroundColor = KEY_COLOR;
          }, i * speed);
          setTimeout(() => {
            barOneStyles.backgroundColor = KEY_COLOR;
            if (barTwoStyles.backgroundColor !== KEY_COLOR_TWO)
              barTwoStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * speed);
          setTimeout(() => {
            barOneStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 2) * speed);
          break;
        case 'swap':
          setTimeout(() => {
            const barOneHeight = barOneStyles.height;
            barOneStyles.height = barTwoStyles.height;
            barTwoStyles.height = barOneHeight;
            if (i === animations.length - 1) sortedAnimation(dataBars);
          }, i * speed);
          break;
        default:
          console.log('Unknown operator??????');
          break;
      }
    }
  };

  const animateMergeSort = () => {
    setAnimating(true);
    setIsSorted(true);
    const speed = ANIMATION_SPEED() * (dataSet.length / 50);
    const animations = MergeSort(dataSet);
    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < animations.length; i++) {
      const [type, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyles = dataBars[barOneIndex as number].style;
      switch (type) {
        case 'compare':
          const barTwoStyles = dataBars[barTwoIndex as number].style;
          setTimeout(() => {
            barOneStyles.backgroundColor = KEY_COLOR_TWO;
            barTwoStyles.backgroundColor = COMPARISON_COLOR;
          }, i * speed);
          setTimeout(() => {
            barOneStyles.backgroundColor = PRIMARY_COLOR;
            barTwoStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1.5) * speed);
          break;
        case 'swap':
          setTimeout(() => {
            barOneStyles.backgroundColor = KEY_COLOR;
            barOneStyles.height = `${calculateHeight(
              dataSet,
              barTwoIndex as number
            )}vh`;
            if (i === animations.length - 1) sortedAnimation(dataBars);
          }, i * speed);
          setTimeout(() => {
            barOneStyles.backgroundColor = PRIMARY_COLOR;
          }, (i + 1.5) * speed);
          break;
        default:
          console.log('Unknown operator??????');
          break;
      }
    }
  };

  return { sortData, setBaseSpeed, animating, isSorted, resetSorted };
};

export default SortAnimator;
