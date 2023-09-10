import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    z-index: 999;
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: ${({ theme }) => theme.padding}px;
    border-radius: 30px 30px 0 0;
    margin-left: 5%;
`;
