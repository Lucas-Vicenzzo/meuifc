import { useState, useRef, useEffect } from 'react';
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

export default function Searchbar({ categoria }) {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);
  useOutsideClick(containerRef, setActive);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Container ref={containerRef} active={active}>
      <InnerContainer active={active} onClick={handleActive}>
      <img src={magnifierIcon} alt="magnifier" />
        <div>
          <h3>{categoria ? 'Pesquise por' : 'Pesquisar no'}</h3>
          <span>{categoria ? categoria.nome : 'Meu IFC'}</span>
        </div>
      </InnerContainer>
      <input type="text" name="Search" placeholder="Pesquise aqui"/>
    </Container>
  );
}
