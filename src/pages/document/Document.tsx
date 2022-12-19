import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropLayer from '../../packages/dnd/DropLayer';

// TypeScript users only add this code
import EditorComponent from '../../packages/editor/EditorComponent';
const Document: React.FC = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <EditorComponent></EditorComponent>
        <DropLayer />
      </DndProvider>
    </div>
  );
};

export default Document;
