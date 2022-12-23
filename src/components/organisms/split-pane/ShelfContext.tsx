import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

export type Item = {
  id: number;
  author: String;
  description: String;
};
export type ShelfContextInterface = {
  currItems: number[];
  shelfItems: Item[];
  setCurrItems: Dispatch<SetStateAction<number[]>>;
};

const ShelfContext = createContext<ShelfContextInterface | null>(null);

export default ShelfContext;
