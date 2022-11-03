import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { RangeWrapper } from '../assets/styledComponents';

interface RangeProps {
  title: string;
  values: (string | number)[];
  value: string | number;
  handleChange: (value: number | string) => void;
}

const Range: FC<RangeProps> = ({ title, values, value, handleChange }) => {

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(values[Number(event.target.value)])
  };

  return (
    <RangeWrapper>
      <h3>{ title }</h3>
      <div>
        { values.map(value => <div key={value}>{ value }</div>) }
      </div>
      <input type='range' min={0} max={values.length - 1} step={1} value={values.findIndex(item => item === value)} onChange={changeHandler} />
    </RangeWrapper>
  );
}

export default Range;