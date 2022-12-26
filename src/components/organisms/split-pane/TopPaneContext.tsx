import { createContext } from 'react';

export type TopPaneContextInterface = {
  // shelfHeight: number | null;
  // connectionHeight: number | null;
  // width: number | null;
  // onMouseHoldDown: (e: MouseEvent) => void;
  // setShelfHeight: (value: number) => void;
  // setConnectionHeight: (value: number) => void;
  // setWidth: (value: number) => void;
  clientHeight: number | null;
  setClientHeight: (value: number) => void;
  onMouseHoldDown: (e: MouseEvent) => void;
};

const TopPaneContext = createContext<TopPaneContextInterface | null>(null);

export default TopPaneContext;
