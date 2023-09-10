import { Container, SearchContainer, DraggableHandle } from './styles';
import handle from '../../assets/images/handle.svg';

export default function Feed() {
  return (
    <Container>
        <DraggableHandle>
        <img src={handle} alt="handle" />
        </DraggableHandle>
        <SearchContainer>
            <input type="text" placeholder="Pesquise no MEU IFC" />
        </SearchContainer>
    </Container>
  );
}
