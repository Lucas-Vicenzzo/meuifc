import Styled from 'styled-components';

export const Container = Styled.div`
    position: relative;
    display: flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    color: #fff;

    border-radius: 37px;
    border: 2px solid #000;
    background: linear-gradient(180deg, #1E1E1E 0%, #161616 100%);
    transition: all ease-in 0.3s;
    overflow: hidden;

    input {
      transform: translateY(250%);
      transition: all ease-in 0.3s;
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
      }
    }

    h3 {
      transition: all ease-in 0.3s;
      position: absolute;
      color: #FFF;
      font-family: DM Sans;
      font-size: 19px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover {

        transform: translateY(-50%) scale(.8);
      }
    }
`;
