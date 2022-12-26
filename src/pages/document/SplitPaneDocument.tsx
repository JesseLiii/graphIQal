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

const SplitPaneWrapper: React.FC<{}> = () => {
  return (
    // <ShelfContext.Provider value={{ shelfItems, currItems, setCurrItems }}>
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
    // </ShelfContext.Provider>
  );
};
export default SplitPaneWrapper;
