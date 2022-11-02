import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import DragObject from './DragObject';

interface DragPlaceProps {
  index: number;
  value: string | number | null;
  setDragged: (value: number | null) => void;
}

const DragPlace: FC<DragPlaceProps> = ({ index, value, setDragged }) => {
  return (
    <div
      onDragOver={() => setDragged(index)} 
      onDragLeave={() => setDragged(null)}
      style={{
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 4,
      }}
    >
      { value && <DragObject value={value} draggable={false} /> }
    </div>
  );
};

export default DragPlace;