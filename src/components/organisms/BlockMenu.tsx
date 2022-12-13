import React, { MutableRefObject } from 'react';
import ToolbarButton from '../molecules/ToolbarButton';
import './BlockMenu.css';

type ToolbarButtonProps = {
  buttonText: String;
  icon?: string;
  onPress(params: any): void;
};

type BlockMenuProps = {
  items: ToolbarButtonProps[];
};

const BlockMenu = React.forwardRef<MutableRefObject<any>, BlockMenuProps>(
  (props, ref) => {
    const { items } = props;

    const renderButtons = () => {
      return items.map((item, i) => {
        const { buttonText, icon, onPress } = item;
        const it = { buttonText, icon, onPress };
        return <ToolbarButton className='block_item' item={it} />;
      });
    };
    return <div className='block_menu'>{renderButtons()}</div>;
  }
);

export default BlockMenu;
