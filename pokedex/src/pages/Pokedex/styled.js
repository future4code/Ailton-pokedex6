import styled from "styled-components";
import { backgroundColors, typesColors } from "../../components/Colors/Colors";

export const Header = styled.header`
  display: flex;
  height: 160px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  h2 {
    text-decoration: underline;
    flex: 1;
    cursor: pointer;
    text-align: center;
  }
  div {
    flex: 1;
  }
`;
export const ImgHeader = styled.img`
  display: flex;
  margin-top: 21px;
  margin-bottom: 26px;
  width: 307px;
  height: 113px;
`;

export const Container = styled.div`
  background-color: #5d5d5d;
  height: 100vh;
  h1 {
    color: #fff;
    margin-left: 40px;
    padding: 16px;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  p {
    color: #fff;
  }
`;

export const CardPokemon = styled.div`
  width: 440px;
  height: 210px;
  margin: 16px auto;
  background-color: ${(props) => backgroundColors[props.type]};
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  color: #fff;
`;

export const NameAndType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PokemonTypes = styled.div`
  display: flex;
  gap: 8px;
`;

export const Ptypes = styled.p`
  background-color: ${(props) => typesColors[props.type]};
  border-radius: 8px;
  padding: 5px;
  font-size: 12px;
  border: 0.2px dashed #fff;
`;

export const ButtonDetalhes = styled.p`
  font-weight: bold;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ImageAndCapture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PokemonImg = styled.div`
  position: relative;
  #backpoke {
    width: 230px;
    position: absolute;
    bottom: -90px;
    left: -15px;
  }
  img {
    width: 170px;
    position: absolute;
    bottom: -40px;
    left: 30px;
  }
`;

export const ButtonExcluir = styled.button`
  width: 140px;
  height: 38px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 12px;
  background-color: #ff6262;
  color: #fff;
  margin-left: 6px;
  position: relative;
  bottom: -155px;
  right: 20px;
  cursor: pointer;
  :active {
    background-color: red;
    transition: 0.3s;
  }
`;
