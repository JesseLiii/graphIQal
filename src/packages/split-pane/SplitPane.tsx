import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ShelfContext, { ShelfContextInterface } from './ShelfContext';
import { Item } from './ShelfContext';
import SplitPaneContext from './SplitPaneContext';
import './pane.css';
import { SplitPaneContextInterface } from './SplitPaneContext';

type SplitPaneProps = {
  children: any;
  className: string;
};

const SplitPane: React.FC<SplitPaneProps> = ({ children, className }) => {
  const [clientHeight, setClientHeight] = useState<number | null>(null);
  const [clientWidth, setClientWidth] = useState<number | null>(null);
  const yDividerPos = useRef<number | null>(null);
  const xDividerPos = useRef<number | null>(null);

  const onMouseHoldDown = (e: MouseEvent) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e: MouseEvent) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(
      (clientHeight as number) + e.clientY - (yDividerPos.current as number)
    );
    setClientWidth(
      (clientWidth as number) + e.clientX - (xDividerPos.current as number)
    );

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseHoldUp);
    document.addEventListener('mousemove', onMouseHoldMove);

    return () => {
      document.removeEventListener('mouseup', onMouseHoldUp);
      document.removeEventListener('mousemove', onMouseHoldMove);
    };
  });

  return (
    <div className={className}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};

export const Divider = (props: any) => {
  const { onMouseHoldDown } = useContext(
    SplitPaneContext
  ) as SplitPaneContextInterface;

  return <div {...props} onMouseDown={onMouseHoldDown} />;
};

export const SplitPaneTop = (props: any) => {
  const topRef = createRef<any>();
  const { clientHeight, setClientHeight } = React.useContext(
    SplitPaneContext
  ) as SplitPaneContextInterface;
  const { shelfItems, setCurrItems, currItems } = useContext(
    ShelfContext
  ) as ShelfContextInterface;

  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }

    topRef.current.style.minHeight = clientHeight + 'px';
    topRef.current.style.maxHeight = clientHeight + 'px';
  }, [clientHeight]);

  return (
    <div {...props} className='split-pane-top' ref={topRef}>
      <h1>Connections</h1>
      <ul>
        {shelfItems.map((el: Item, i) => {
          return (
            <li key={i}>
              <a href='#' onClick={() => setCurrItems([...currItems, el.id])}>
                {el.author}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SplitPaneBottom = (props: any) => {
  const { currItems } = useContext(ShelfContext) as ShelfContextInterface;

  return (
    <div {...props} className='split-pane-bottom'>
      {props.children}
    </div>
  );
};

export const SplitPaneLeft = (props: any) => {
  const topRef = createRef<any>();
  const { clientWidth, setClientWidth } = useContext(
    SplitPaneContext
  ) as SplitPaneContextInterface;

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(topRef.current.clientWidth / 2);
      return;
    }

    topRef.current.style.minWidth = clientWidth + 'px';
    topRef.current.style.maxWidth = clientWidth + 'px';
  }, [clientWidth]);

  return <div {...props} className='split-pane-left' ref={topRef} />;
};

export const SplitPaneRight = (props: any) => {
  const { shelfItems, currItems } = useContext(
    ShelfContext
  ) as ShelfContextInterface;
  const itemList = shelfItems.find((el) => el.id === currItems[0]);

  return (
    <div {...props} className='split-pane-right'>
      {props.children}
    </div>
  );
};

export default SplitPane;
