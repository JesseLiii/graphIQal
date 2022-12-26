import {
  createPlateUI,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
} from '@udecode/plate';
import { useDrag } from 'react-dnd';
import Handle from '../../../components/atoms/Handle';
import { ItemTypes } from '../../dnd/types';
import '../editor.css';

// ELEMENTS
// Define a React component renderer for our code blocks.

//Question: do we want to drag multiple blocks at the same time?
export const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export const Block = (props: any) => {
  const [{ opacity }, drag, preview] = useDrag(() => ({
    type: ItemTypes.block,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <div
      ref={preview}
      style={{ opacity }}
      className='text_box' /**{...props.attributes}**/
    >
      <span ref={drag}>
        <Handle></Handle>
      </span>
      {props.children}
    </div>
  );
};

export const H1 = (props: any) => {
  console.log(props);
  const plateUI = createPlateUI({})[ELEMENT_H1];
  console.log(plateUI);
  // return plateUI[ELEMENT_H1];

  return <Block>{props.children}</Block>;
};

export const H2 = (props: any) => {
  console.log(props);
  const plateUI = createPlateUI({})[ELEMENT_H2];
  console.log(plateUI);
  // return plateUI[ELEMENT_H1];

  return <h2>{props.children}</h2>;
};

export const H3 = (props: any) => {
  console.log(props);
  const plateUI = createPlateUI({})[ELEMENT_H3];
  console.log(plateUI);
  // return plateUI[ELEMENT_H1];

  return <h3>{props.children}</h3>;
};

export const Leaf = (props: any) => {
  if (props.leaf.italics) {
    console.log('leaf', props);
    return (
      <span
        {...props.attributes}
        className={
          props.leaf.text_type + ' ' + props.leaf.bold ? 'font-bold' : ''
        }
      >
        <em>{props.children}</em>
      </span>
    );
  }

  return (
    <span
      {...props.attributes}
      className={
        props.leaf.text_type + ' ' + props.leaf.bold ? 'font-bold' : ''
      }
    >
      {props.children}
    </span>
  );
};
