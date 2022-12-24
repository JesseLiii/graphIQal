import { AngleDown } from '@styled-icons/fa-solid/AngleDown';
import { AngleRight } from '@styled-icons/fa-solid/AngleRight';
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import IconTitle from '../../molecules/IconTitle';
import './pane.css';
import SplitPaneContext, {
  SplitPaneContextInterface,
} from './SplitPaneContext';

type SplitPaneProps = {
  children: any;
  className: string;
};

/*
hemingway bridge:
- make molecule for icon and title
- fix usecontext for height of different panes
- make panes scrollable
- clean files and push
- responsive design 
*/

//should be lg spacing variable
const UNIT = 1;

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
  const [active, setActive] = useState<boolean>(false);
  const { clientHeight, setClientHeight } = React.useContext(
    SplitPaneContext
  ) as SplitPaneContextInterface;

  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }

    if (clientHeight < 50) {
      setActive(false);
    }
    if (!active) {
      setActive(true);
    }
    topRef.current.style.minHeight = clientHeight + 'px';
    topRef.current.style.maxHeight = clientHeight + 'px';
  }, [clientHeight]);

  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }
    if (!active) {
      topRef.current.style = UNIT * 3.5 + 'em';
      topRef.current.style.maxHeight = UNIT * 3.5 + 'em';
    } else {
      // setClientHeight(topRef.current.style.minHeight);
      topRef.current.style.minHeight = clientHeight + 'px';
      topRef.current.style.maxHeight = clientHeight + 'px';
    }
  }, [active]);

  return (
    <div {...props} className='split-pane-top' ref={topRef}>
      <IconTitle
        title={props.title}
        icon={
          active ? (
            <AngleDown onClick={() => setActive(false)} size={UNIT + 'em'} />
          ) : (
            <AngleRight onClick={() => setActive(true)} size={UNIT + 'em'} />
          )
        }
      />

      {props.children}
    </div>
  );
};

export const SplitPaneBottom = (props: any) => {
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
  return (
    <div {...props} className='split-pane-right'>
      {props.children}
    </div>
  );
};

export default SplitPane;
