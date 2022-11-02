import { DetailedHTMLProps, DragEvent, FC, HTMLAttributes } from 'react';
import { DragObjectWrapper } from '../assets/styledComponents';

interface DragObjectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number | string;
  setDragged?: (value: number | string) => void;
  setCurrentItem?: () => void;
}

const DragObject: FC<DragObjectProps> = ({ value, setDragged, setCurrentItem }) => {

  const attrs = { 'data-value': value };

  const onDragStart = () => {
    setDragged && setDragged(value);
  };

  return (
    <div
      {...attrs}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        background: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))',
        borderRadius: '50%',
        color: 'white',
        zIndex: 10,
        cursor: 'pointer',
      }}
      onDragStart={onDragStart}
      onDragEnd={setCurrentItem}
    >
      {value}
    </div>
  );
};

export default DragObject;