import React, { useState } from 'react';
import SplitPane from '../../components/organisms/split-pane/SplitPane';
import ShelfContext from '../../components/organisms/split-pane/ShelfContext';
import Document from './Document';
import {
  SplitPaneLeft,
  SplitPaneBottom,
  SplitPaneTop,
  Divider,
  SplitPaneRight,
} from '../../components/organisms/split-pane/SplitPane';

const shelfItems = [
  {
    id: 1,
    author: 'Nelson Mandela',
    description:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  },
  {
    id: 2,
    author: 'Walt Disney',
    description: 'The way to get started is to quit talking and begin doing.',
  },
  {
    id: 3,
    author: 'Oprah Winfrey',
    description:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
];
const SplitPaneWrapper: React.FC<{}> = () => {
  const [currItems, setCurrItems] = useState([1]);

  return (
    <ShelfContext.Provider value={{ shelfItems, currItems, setCurrItems }}>
      <SplitPane className='split-pane-row'>
        <SplitPaneLeft>
          <SplitPane className='split-pane-col'>
            <SplitPaneTop title={'Shelf'} children={<p>text</p>} />
            <Divider className='separator-row' />
            <SplitPaneTop title={'Connections'} children={<p>text</p>} />
            <Divider className='separator-row' />
            <SplitPaneBottom />
          </SplitPane>
        </SplitPaneLeft>
        <Divider className='separator-col' />
        <SplitPaneRight children={<Document></Document>} />
      </SplitPane>
    </ShelfContext.Provider>
  );
};
export default SplitPaneWrapper;