import React, { ReactNode } from 'react';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { TippyProps } from '@tippyjs/react';
import {
  BalloonToolbar,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MarkToolbarButton,
} from '@udecode/plate';
import { useMyPlateEditorRef } from '../plateTypes';

export const markTooltip: TippyProps = {
  arrow: true,
  delay: 0,
  duration: [200, 0],
  hideOnClick: false,
  offset: [0, 17],
  placement: 'top',
};

export const EditorFloatingMenu = ({ children }: { children?: ReactNode }) => {
  const editor = useMyPlateEditorRef();

  const arrow = false;
  const theme = 'dark';

  // const boldTooltip: TippyProps = { content: 'Bold (⌘+B)', ...markTooltip };
  // const italicTooltip: TippyProps = {
  // 	content: 'Italic (⌘+I)',
  // 	...markTooltip,
  // };
  // const underlineTooltip: TippyProps = {
  // 	content: 'Underline (⌘+U)',
  // 	...markTooltip,
  // };

  return (
    <BalloonToolbar
      theme={theme}
      arrow={arrow}
      floatingOptions={{ placement: 'top' }}
    >
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        // tooltip={boldTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        // tooltip={italicTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        // tooltip={underlineTooltip}
      />
      {children}
    </BalloonToolbar>
  );
};
