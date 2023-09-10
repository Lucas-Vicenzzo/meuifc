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

export const Placeholder = styled.div`
    display: ${({ search }) => (search === 0 ? 'flex' : 'none')};
    padding: 24px;
    justify-content: center;
    align-items: center;
    gap: 18px;
    align-self: stretch;
    border-radius: 37px;
    border: 2px solid #000;
    background: linear-gradient(180deg, #1E1E1E 0%, #161616 100%);
    transition: all 0.5s ease-in-out;

    h3 {
        color: ${({ theme }) => theme.primary};
        font-family:'DM Sans', sans-serif;
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    span {
        color: #FFF;
        font-family: 'DM Sans', sans-serif;
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
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
        position: relative;
        display: ${({ search }) => (search === 1 ? 'flex' : 'none')};

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

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        overflow: scroll hidden;
        position: relative;
        scrollbar-width: auto;
        scrollbar-color: #636363 #ffffff;
        &::-webkit-scrollbar {
        display: none;
        }
        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #ffffff;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #636363;
            border-radius: 10px;
            border: 3px solid #ffffff;
        }
    }

`;

export const CategoryPill = styled.button`
    display: flex;
    padding: 6px 20px;
    align-items: center;
    gap: 10px;
    border-radius: 1000px;
    border: 1px solid ${({ theme }) => theme.primary};
    background: ${(props) => (props.click ? props.theme.primary : 'Transparent')};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.2s ease-in-out;

    h3 {
        color:  ${(props) => (props.click ? '#000' : '#FFF')};
    }
`;
