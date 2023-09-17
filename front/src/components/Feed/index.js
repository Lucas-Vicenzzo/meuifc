import { useState } from 'react';
import {
  Container, SearchContainer, DraggableHandle, CategoriesContainer, CategoryPill,
} from './styles';

import Searchbar from '../Searchbar';
import handle from '../../assets/images/handle.svg';

import filterIcon from '../../assets/images/icons/Funnel.svg';

const categories = [
  {
    id: 1,
    name: 'Salas',
  },
  {
    id: 2,
    name: 'Banheiros',
  },
  {
    id: 3,
    name: 'Laboratórios',
  },
  {
    id: 4,
    name: 'Auditórios',
  },
  {
    id: 5,
    name: 'Biblioteca',
  },

];

export default function Feed() {
  const [click, setClick] = useState({});

  function handleCategoryClick(id) {
    setClick({
      [id]: !click[id],
    });
  }
  return (
    <Container>
      <DraggableHandle>
        <img src={handle} alt="handle" />
      </DraggableHandle>
      <SearchContainer>
        <Searchbar categories={categories} />
        <CategoriesContainer>
          <img src={filterIcon} alt="filtros" />
          <div>
            {categories.map((category) => (
              <CategoryPill
                click={click[category.id]}
                onClick={() => handleCategoryClick(category.id, category.name)}
                key={category.id}
              >
                <h3>{category.name}</h3>
              </CategoryPill>
            ))}
          </div>
        </CategoriesContainer>
      </SearchContainer>
    </Container>
  );
}
