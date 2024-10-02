import { ChangeEvent, useEffect, useState } from 'react';
import { StyledInput } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../../store/features/input/inputSlice';
import { RootState } from '../../store/store';
import { filterByText } from '../../store/features/filter/filterSlice';
import { useDebounce } from '../../hooks/useDebounce';

interface IInputProps {
  placeholder: string;
  title?: string;
}

export const Input = ({ placeholder, title = '' }: IInputProps) => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const [inputValue, setInputValue] = useState(title);
  const debouncedSearch = useDebounce(inputValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (placeholder === '   Search note...') {
      dispatch(filterByText(inputValue));
    }
  }, [debouncedSearch]);

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    dispatch(changeInput(e.target.value));
  };

  return (
    <StyledInput
      onChange={onChangeInputHandler}
      value={inputValue}
      placeholder={placeholder}
      $isDark={isDark}
    />
  );
};
