import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { RangeWrapper } from '../assets/styledComponents';

interface RangeProps {
  title: string;
  values: (string | number)[];
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Range: FC<RangeProps> = ({ title, values, value, onChange }) => {

  return (
    <RangeWrapper>
      <h3>{ title }</h3>
      <div>
        { values.map(value => <div>{ value }</div>) }
      </div>
      <input id={title} type='range' value={value} list={title} onChange={onChange} />
      <datalist id={title}>
        { values.map(value => <option value={value} />) }
      </datalist>
    </RangeWrapper>
  );
}

export default Range;