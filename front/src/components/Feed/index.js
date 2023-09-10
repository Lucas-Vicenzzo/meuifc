import { useState } from 'react';
import {
  Container, SearchContainer, Placeholder, DraggableHandle, CategoriesContainer, CategoryPill,
} from './styles';
import handle from '../../assets/images/handle.svg';
import magnifierIcon from '../../assets/images/icons/MagnifyingGlass.svg';
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
  const [input, setInput] = useState('MEU IFC');
  const [search, setSearch] = useState(0);
  const [click, setClick] = useState({});

  function handleCategoryClick(id, value) {
    setClick({
      [id]: !click[id],
    });
    setInput(value);
  }
  function handleSearchToggle() {
    setSearch(1);
    console.log(search);
  }
  return (
        <Container>
            <DraggableHandle>
            <img src={handle} alt="handle" />
            </DraggableHandle>
            <SearchContainer>
                <Placeholder search={search} onClick={() => handleSearchToggle()}>
                    <img src={magnifierIcon} alt="magnifier" />
                    <span> Pesquise </span>
                    <h3>{click ? input : 'MEU IFC'}</h3>
                    <input type="text" placeholder={input} />
                </Placeholder>

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
