import styled from 'styled-components';

export const Container = styled.header`
    z-index: 999;
    margin-left: 40px;
    max-width: 400px;
    width: 100%;
    /* background-color: ${({ theme }) => theme.backgroundColor}; */
    padding: ${({ theme }) => theme.padding}px;
    border-radius: 0px 0px 30px 30px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        max-width: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${({ theme }) => theme.textColor};

    h1 {
        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme.primary};
    }
    span {
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`;

export const pill = styled.button`
    border-radius: 1000px;
    display: flex;
    padding: 6px 20px;
    align-items: center;
    gap: 10px;
    border: 1px solid #3FFFAE;
    background: #1E1E1E;
`;
