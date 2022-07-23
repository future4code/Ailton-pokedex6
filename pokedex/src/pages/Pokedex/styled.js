import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    height: 160px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
export const ImgHeader = styled.img`
    display: flex;
    margin-top: 21px;
    margin-bottom: 26px;
    width: 307px;
    height: 113px;
`;

export const CardPokemon = styled.div`
  width: 440px;
  height: 210px;
  margin: 16px auto;
  background-color: ${""};
  border-radius: 12px;
  color: #000;
  border: 1px solid lightgray;
  img {
    width: 170px;
  }
`;