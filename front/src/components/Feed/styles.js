import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    z-index: 999;
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: ${({ theme }) => theme.padding}px;
    border-radius: 30px 30px 0 0;
    margin-left: 40px;
    gap: 10px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

`;

export const DraggableHandle = styled.div`
    width: 100%;
    padding: 5px 0;
    display: flex;
    justify-content: center;
`;

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        overflow: scroll;
        position: relative;
        &::-webkit-scrollbar {
        display: none;
        }
    }

`;

export const CategoryPill = styled.button`
    display: flex;
    padding: 6px 20px;
    align-items: center;
    gap: 10px;
    border-radius: 1000px;
    border: 2px solid ${({ theme }) => theme.primary};
    background: transparent;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.1s ease-in;
    color: ${({ theme }) => theme.textColor};
    white-space: nowrap;

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.backgroundColor};
    }
    &:active {
        transform: scale(0.9);
    }
`;
