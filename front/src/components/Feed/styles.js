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
`;

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;

    input {
        width:100%;
        padding: 20px;
        border-radius: 1000px;
        background: linear-gradient(180deg, #1E1E1E 0%, #161616 100%);
        border: 2px solid  #000;
        color: #fff;
        transition: all 0.5s ease-in-out;
        display: flex;
        align-items: center;

        &:focus {
            outline: none;
            box-shadow: 0px 0px 31px -9px #3FFFAE;
        }

        &::placeholder {
            color: ${({ theme }) => theme.primary};
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            text-align: center;
        }
    }
`;

export const DraggableHandle = styled.div`
    width: 100%;
    padding: 5px 0;
    display: flex;
    justify-content: center;
`;
