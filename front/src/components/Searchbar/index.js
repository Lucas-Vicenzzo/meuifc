// import { useState } from 'react';
import PropTypes from 'prop-types';
import * as style from './style';
import magnifierIcon from '../../assets/images/icons/MagnifyingGlass.svg';

export default function Searchbar({ categories }) {
  // const [search, setSearch] = useState('');
  console.log(categories);
  return (
    <style.Container>
      <img src={magnifierIcon} alt="magnifier" />
      <h3>Pesquisar</h3>
      <input type="text" name="Search" id="" />
    </style.Container>
  );
}

Searchbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes).isRequired,
};
