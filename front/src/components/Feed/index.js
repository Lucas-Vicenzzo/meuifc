import { useState } from 'react';
import {
  Container, SearchContainer, DraggableHandle, CategoriesContainer, CategoryPill,
} from './styles';

import Searchbar from '../Searchbar';
import handle from '../../assets/images/handle.svg';
import filterIcon from '../../assets/images/icons/Funnel.svg';
import { categories } from '../../mock';

export default function Feed() {
  const [select, setSelected] = useState(0);

  return (
    <Container>
      <DraggableHandle>
        <img src={handle} alt="handle" />
      </DraggableHandle>
      <SearchContainer>
        <Searchbar categories={categories} id={select} />
        <CategoriesContainer>
          <img src={filterIcon} alt="filtros" />
          <div>
            {categories.map((category) => (
              <CategoryPill
                onClick={() => setSelected(category.id)}
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
