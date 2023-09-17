// import { useState } from 'react';
import PropTypes from 'prop-types';
import { InnerContainer, Container } from './style';
import magnifierIcon from '../../assets/images/icons/MagnifyingGlass.svg';

export default function Searchbar({ categories, id }) {
  // const [search, setSearch] = useState('');

  return (
    <Container>
      <InnerContainer>
        <img src={magnifierIcon} alt="magnifier" />
        <h3>{id === 0 ? 'Pesquisar no' : 'Pesquisar Por'}</h3>
        <span>
          {id === 0 ? 'Meu IFC' : categories.map((category) => category.id === id && category.name)}
        </span>
      </InnerContainer>
      <input type="text" name="Search" id="" />
    </Container>
  );
}

Searchbar.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  id: PropTypes.number.isRequired,
};
