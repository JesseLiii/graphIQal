import { createContext } from 'react';

export type SplitPaneContextInterface = {
  // shelfHeight: number | null;
  // connectionHeight: number | null;
  // width: number | null;
  // onMouseHoldDown: (e: MouseEvent) => void;
  // setShelfHeight: (value: number) => void;
  // setConnectionHeight: (value: number) => void;
  // setWidth: (value: number) => void;
  clientHeight: number | null;
  setClientHeight: (value: number) => void;
  clientWidth: number | null;
  setClientWidth: (value: number) => void;
  onMouseHoldDown: (e: MouseEvent) => void;
};

const SplitPaneContext = createContext<SplitPaneContextInterface | null>(null);

export default SplitPaneContext;
