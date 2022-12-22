import React, { useState } from 'react';
import Document from './document/Document';
import View from '../components/layouts/View';
import Window from '../components/layouts/Window';
import SplitPaneWrapper from '../packages/split-pane/SplitPaneWrapper';

const Home: React.FC = () => {
  return (
    <div>
      <Window>
        <View>
          <SplitPaneWrapper></SplitPaneWrapper>
          {/* <Document></Document> */}
        </View>
      </Window>
    </div>
  );
};

export default Home;
