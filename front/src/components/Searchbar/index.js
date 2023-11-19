import { useState, useEffect } from 'react';
import { InnerContainer, Container } from './style';
import magnifierIcon from '../../assets/images/icons/MagnifyingGlass.svg';

function useOutsideClick(ref, setActive) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default function Searchbar({
  categoria, currentRef, salas, setSearch,
}) {
  const [active, setActive] = useState(false);
  useOutsideClick(currentRef, setActive);
  const handleActive = () => {
    setActive(!active);
  };

  const handleInput = (e, salas, setSearch) => {
    if (e.key === 'Enter') {
      setSearch(salas.find((sala) => sala.nome === e.target.value));
    }
  };

  return (
    <Container active={active}>
      <InnerContainer active={active} onClick={handleActive}>
      <img src={magnifierIcon} alt="magnifier" />
        <div>
          <h3>{categoria ? 'Pesquise por' : 'Pesquisar no'}</h3>
          <span>{categoria ? categoria.nome : 'Meu IFC'}</span>
        </div>
      </InnerContainer>
      <input
        type="text"
        name="Search"
        placeholder="Pesquise aqui"
        onKeyDown={(e) => handleInput(e, salas, setSearch)}
      />
    </Container>
  );
}
