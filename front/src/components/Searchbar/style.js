import Styled from 'styled-components';

export const Container = Styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: flex-start;
    align-items: stretch;
    align-self: stretch;
    color: #fff;
    gap: 16px;
    border-radius: 37px;
    border: 2px solid #000;
    background: linear-gradient(180deg, #1E1E1E 0%, #161616 100%);
    transition: all ease-in 0.3s;
    overflow: hidden;
    max-height: 75px;

    input {
      transition: all ease-in 0.3s;
      background: transparent;

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.primary};
        }
      }
`;

export const InnerContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 8px;
  flex-grow: 1;
  height: 75px;
  font-size: 19px;

  h3 {
      transition: all ease-in 0.3s;
      color: #FFF;
      font-family: 'DM Sans', sans-serif ;
      font-size: 19px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    span {
      color: ${({ theme }) => theme.primary};
      font-size: 19px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: block;
    }
`;
