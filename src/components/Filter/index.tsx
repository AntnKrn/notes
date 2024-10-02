import { useState } from 'react';
import {
  FilterListItem,
  FilterListItems,
  FilterListText,
  FilterContainer,
  FilterWrapper,
  Text,
  StyledOpennerSVG,
} from './style';
import { useDispatch } from 'react-redux';
import { filterByComplete } from '../../store/features/filter/filterSlice';

const filterParams = ['All', 'Complete', 'Incomplete'];

export const Filter = () => {
  const [filter, setFilter] = useState(filterParams[0]);
  const dispatch = useDispatch();

  const onClickFilterItemHandler = (filterName: string) => {
    setFilter(filterName);
    dispatch(filterByComplete(filterName));
  };
  return (
    <FilterWrapper>
      <FilterContainer>
        <Text>{filter.toUpperCase()}</Text>
        <StyledOpennerSVG />
      </FilterContainer>
      <FilterListItems>
        {filterParams.map((el) => (
          <FilterListItem key={el} onClick={() => onClickFilterItemHandler(el)}>
            <FilterListText>{el}</FilterListText>
          </FilterListItem>
        ))}
      </FilterListItems>
    </FilterWrapper>
  );
};
