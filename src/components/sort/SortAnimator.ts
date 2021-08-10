/* eslint-disable no-loop-func */
import React, { useState } from 'react';

import { calculateHeight } from '../data-set/DataSetDisplay';

import BubbleSort from './algorithms/BubbleSort';
import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import QuickSort from './algorithms/QuickSort';
import HeapSort from './algorithms/HeapSort';

export type AlgorithmType =
  | 'bubble'
  | 'selection'
  | 'insertion'
  | 'merge'
  | 'quick_lom'
  | 'quick_hor'
  | 'heap'
  | undefined;

// Main Colors
export const PRIMARY_COLOR = 'steelblue';
const COMPARISON_COLOR = 'yellow';
const KEY_COLOR = 'magenta';
const KEY_COLOR_TWO = 'crimson';
const SORTED_COLOR = 'seagreen';

let baseSpeed = 2;

/**
 * Clamps a number between a range of values:
 * (Can't go over or under a certain range).
 * @param num Value to be clamped.
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns The value, num, clamped within a certain range.
 */
const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

/**
 * Animates the sorting and manages the animation state.
 * @param dataSet The current data set.
 * @returns A collection of useful properties and functions.
 */
const SortAnimator = (dataSet: number[]) => {
  // States used to disable user input
  const [animating, setAnimating] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  // States used for statistics
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  /**
   * Resets the data set back to its original unsorted state.
   */
  const resetSorted = () => {
    setIsSorted(false);
    setComparisons(0);
    setSwaps(0);
  };

  /**
   * Sets the speed of animation via slider.
   * @param e The slider event.
   */
  const setBaseSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    baseSpeed = 1 / parseFloat(e.target.value);
  };

  /**
   * Scales animation speed appropriately with the data set size.
   * such that it takes the same time regardless of size.
   * @returns The animation speed to be used.
   */
  const ANIMATION_SPEED = () => {
    const multiplier = dataSet.length / 100;
    return baseSpeed / (multiplier * multiplier);
  };

  /**
   * Calls the appropriate sorting algorithm and begins animating.
   * @param algorithm The algorithm to be used for sorting.
   */
  const sortData = (algorithm?: AlgorithmType) => {
    setAnimating(true);
    setIsSorted(true);

    let animations: (string | number)[][] = [];

    // Higher value -> Slower animation
    // slowFactor of 1 is the base speed for selectionSort
    // Increases for O(nlogn) algos as they are too quick to match speeds
    let slowFactor = 1;

    switch (algorithm) {
      case 'bubble':
        animations = BubbleSort(dataSet);
        slowFactor = 0.5;
        break;
      case 'selection':
        animations = SelectionSort(dataSet);
        break;
      case 'insertion':
        animations = InsertionSort(dataSet);
        break;
      case 'merge':
        animations = MergeSort(dataSet);
        slowFactor = 5;
        break;
      case 'quick_lom':
        animations = QuickSort(dataSet, true);
        slowFactor = 5;
        break;
      case 'quick_hor':
        animations = QuickSort(dataSet, false);
        slowFactor = 5;
        break;
      case 'heap':
        animations = HeapSort(dataSet);
        slowFactor = 5;
        break;
      default:
        // Should in theory never happen
        setIsSorted(false);
        setAnimating(false);
        console.error('No algorithm specified :/');
        return;
    }
    animateSort(animations, slowFactor);
  };

  /*
  SORTING ALGORITHM ANIMATIONS HERE

  =========================================================

  ALL SORTING ALGORITHMS RETURN AN 'ANIMATION' ARRAY:
  An animation array is a 2D array that contains the steps
  done in animating the sorting.

  Each element is an array that containes the following values:
    - type: string = The kind of operator it is
        - 'key': Highlights a certain value
            (pivot, mid point, leading bar, etc.)
        - 'compare': Highlights two bars which are
            being compared against each other
        - 'swap': Swaps heights between bars
            * for merge sort, only the first bar height is changed
    - indexOne: number = The index of the first bar
    - indexTwo: number = The index of the second bar
        * indexTwo may be a duplicate for 'key' operations,
            as only one bar is needed

  Sorting then utilizes each element of the animation array to modify the
  CSS styling of the bars to demonstrate the sorting.

  Note: All animations use a bunch of setTimeouts
    - Yes, I know it looks horrible, I just don't know any other alternative
  */

  /**
   * The final 'green swipe' animation after being sorted.
   * @param dataBars An array containing the HTMLElements of the data bars.
   */
  const finishSorting = (dataBars: HTMLCollectionOf<HTMLElement>) => {
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

  /**
   * Animates the sorting algorithm
   * @param animations The animations array returned by a sorting algo.
   * @param slowFactor Slows the speed of animation (Greater value = Slower).
   */
  const animateSort = (
    animations: (string | number)[][],
    slowFactor: number
  ) => {
    const speed = ANIMATION_SPEED() * slowFactor;

    const dataBars = document.getElementsByClassName(
      'data_bar'
    ) as HTMLCollectionOf<HTMLElement>;

    let lastKeyIndex = 0;

    let localComparisons = 0;
    let localSwaps = 0;

    // Instead of updating state immediately after a swap/compare
    //    * will cause componenet re-renders
    // It will update at a set frequency instead that scales with the size
    // of the data set.
    const statUpdateSpeed = dataSet.length * 1.5;
    const updateStats = setInterval(() => {
      setComparisons(localComparisons);
      setSwaps(localSwaps);
    }, statUpdateSpeed);

    for (let i = 0; i < animations.length; i++) {
      const [type, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyles = dataBars[barOneIndex as number].style;

      // Used to check if a bartwo actually exists
      const hasValidBarTwo =
        (barTwoIndex as number) < dataSet.length &&
        Number.isInteger(barTwoIndex as number);
      // If barTwoIndex is not, default barTwo to barOne
      const barTwoStyles =
        dataBars[
          hasValidBarTwo ? (barTwoIndex as number) : (barOneIndex as number)
        ].style;

      switch (type) {
        case 'key': // Highlight the key
          setTimeout(() => {
            if (lastKeyIndex !== barOneIndex) {
              dataBars[lastKeyIndex as number].style.backgroundColor =
                PRIMARY_COLOR;
              barOneStyles.backgroundColor = KEY_COLOR_TWO;
              lastKeyIndex = barOneIndex as number;
            }
            if (i === animations.length - 1) {
              setComparisons(localComparisons);
              setSwaps(localSwaps);
              finishSorting(dataBars);
              clearInterval(updateStats);
            }
          }, i * speed);
          break;
        case 'compare': // Color the two bars being compared
          setTimeout(() => {
            localComparisons++;
            if (barOneIndex !== lastKeyIndex)
              barOneStyles.backgroundColor = COMPARISON_COLOR;
            if (barTwoIndex !== lastKeyIndex)
              barTwoStyles.backgroundColor = KEY_COLOR;
          }, i * speed);
          setTimeout(() => {
            if (barOneIndex !== lastKeyIndex)
              barOneStyles.backgroundColor = PRIMARY_COLOR;
            if (barTwoIndex !== lastKeyIndex)
              barTwoStyles.backgroundColor = PRIMARY_COLOR;
            if (i === animations.length - 1) {
              dataBars[lastKeyIndex as number].style.backgroundColor =
                PRIMARY_COLOR;
              setComparisons(localComparisons);
              setSwaps(localSwaps);
              finishSorting(dataBars);
              clearInterval(updateStats);
            }
          }, (i + 1) * speed);
          break;
        case 'swap': // Swap heights of the two bars
          setTimeout(() => {
            localSwaps++;
            if (hasValidBarTwo) {
              const barOneHeight = barOneStyles.height;
              barOneStyles.height = barTwoStyles.height;
              barTwoStyles.height = barOneHeight;
            } else {
              // For merge sort which does not involve swapping,
              // and the fact it refrences a temp array for swaps,
              // barOne's height is instead directly changed to the value
              // held by temp array (stored as barTwoIndex)
              const newHeight = calculateHeight(dataSet, barTwoIndex as number);
              barOneStyles.height = `${newHeight}vh`;
            }
            if (i === animations.length - 1) {
              dataBars[lastKeyIndex as number].style.backgroundColor =
                PRIMARY_COLOR;
              setComparisons(localComparisons);
              setSwaps(localSwaps);
              finishSorting(dataBars);
              clearInterval(updateStats);
            }
          }, i * speed);
          break;
        default:
          console.error('Unknown operator??????');
          break;
      }
    }
  };

  // Grouping things for better readability
  const statistics = {
    comparisons,
    swaps
  };

  const functions = {
    sortData,
    setBaseSpeed,
    resetSorted
  };

  const properties = {
    animating,
    isSorted,
    statistics
  };

  return { functions, properties };
};

export default SortAnimator;
