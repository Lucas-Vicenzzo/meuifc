// import { useState } from 'react';
import { InnerContainer, Container } from './style';
import magnifierIcon from '../../assets/images/icons/MagnifyingGlass.svg';

export default function Searchbar() {
  // const [search, setSearch] = useState('');

  return (
    <Container>
      <InnerContainer>
        <img src={magnifierIcon} alt="magnifier" />
      </InnerContainer>
      <input type="text" name="Search" id="" />
    </Container>
  );
}
