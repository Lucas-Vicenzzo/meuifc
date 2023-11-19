import { useEffect, useState, useRef } from 'react';
import Searchbar from '../Searchbar';
import {
  Container, SearchContainer, DraggableHandle, CategoriesContainer, CategoryPill,
} from './styles';

import handle from '../../assets/images/handle.svg';
import filterIcon from '../../assets/images/icons/Funnel.svg';

export default function Feed({ salas, setSearch }) {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categories, setCategories] = useState([]);

  function handleSelection(category) {
    setSelectedCategory(category);
  }

  useEffect(() => {
    fetch('http://localhost:4000/categorias')
      .then(async (response) => {
        const data = await response.json();
        setCategories(data);
      });
  }, []);

  return (
    <Container>
      <DraggableHandle>
        <img src={handle} alt="handle" />
      </DraggableHandle>
      <SearchContainer ref={containerRef}>
        <Searchbar
          categoria={selectedCategory}
          currentRef={containerRef}
          salas={salas}
          setSearch={setSearch}
        />
        <CategoriesContainer>
          <img src={filterIcon} alt="filtros" />
          <div>
            {categories.map(({ id, nome }) => (
              <CategoryPill onClick={() => handleSelection({ id, nome })} key={id}>
                <h3>{ nome }</h3>
              </CategoryPill>
            ))}
          </div>
        </CategoriesContainer>
      </SearchContainer>
    </Container>
  );
}
