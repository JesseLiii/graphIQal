import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

export type SplitPaneContextInterface = {
  clientHeight: number | null;
  setClientHeight: (value: number) => void;
  clientWidth: number | null;
  setClientWidth: (value: number) => void;
  onMouseHoldDown: (e: any) => void;
};

const SplitPaneContext = createContext<SplitPaneContextInterface | null>(null);

export default SplitPaneContext;
