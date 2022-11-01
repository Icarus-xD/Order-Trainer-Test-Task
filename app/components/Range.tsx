import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { RangeWrapper } from '../assets/styledComponents';

interface RangeProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title: string;
  values: (string | number)[];
}

const Range: FC<RangeProps> = ({ title, values }) => {

  return (
    <RangeWrapper>
      <h3>{ title }</h3>
      <div>
        { values.map(value => <div>{ value }</div>) }
      </div>
      <input type='range' list={title} />
      <datalist id={title}>
        { values.map(value => <option value={value} />) }
      </datalist>
    </RangeWrapper>
  );
}

export default Range;