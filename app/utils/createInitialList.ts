import { ObjectValuesType } from '../store/gameSettingsSlice';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const createInitailList = (count: number, valuesRange: ObjectValuesType) => {

  const initialList: (string | number)[] = [];

  if (valuesRange === 'A') {
    for (let i = 0; i < count; i++) {
      let newItem = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      while (initialList.includes(newItem)) {
        newItem = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      }
      initialList.push(newItem);
    }
  } else {
    for (let i = 0; i < count; i++) {
      let newItem = Math.ceil(Math.random() * valuesRange);
      while (initialList.includes(newItem)) {
        newItem = Math.ceil(Math.random() * valuesRange);
      }
      initialList.push(newItem);
    }
  }


  return initialList;
};