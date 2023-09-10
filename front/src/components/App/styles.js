import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: ${window.innerHeight}px;
    flex: 1;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
