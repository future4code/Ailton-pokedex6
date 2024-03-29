import styled from "styled-components";
import { backgroundColors, typesColors } from "../../components/Colors/Colors";

export const Header = styled.header`
  display: flex;
  height: 160px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  h2 {
    cursor: pointer;
    text-decoration: underline;
  }
  img {
    margin-top: 21px;
    margin-bottom: 26px;
    width: 307px;
    height: 113px;
  }
  button {
    background-color: #ff6262;
    color: white;
    font-weight: bold;
    font-size: 1.3em;
    width: 226px;
    height: 57px;
    margin-top: 41px;
    margin-bottom: 45px;
    border-radius: 8px;
    padding: 4px 10px 2px 10px;
    cursor: pointer;
    border: none;
    :active {
      background-color: red;
      transition: 0.3s;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: #5d5d5d;
  color: #fff;
  height: 100vh;
  #backgroundPokebola {
    position: absolute;
    left: 300px;
    width: 50%;
    z-index: -1;
  }
  h1 {
    margin-left: 36px;
    padding: 10px;
  }
`;

export const DetailsPokemon = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 90%;
  height: 600px;
  margin: 20px auto;
  background-color: ${(props) => backgroundColors[props.type]};
  border-radius: 20px;
`;

export const StatsImg = styled.div`
  display: flex;
  flex-direction: column;
  #front,
  #back {
    width: 260px;
    height: 260px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0 5px 30px;
    img {
      width: 200px;
    }
  }
`;

export const StatsDetails = styled.div`
  width: 350px;
  height: 550px;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  margin: 0px 0 25px 30px;
  h3 {
    text-align: center;
    margin: 12px;
  }
  div {
    display: flex;
    justify-content: space-between;
    p {
      margin-left: 8px;
    }
    progress {
      margin: 8px;
      ::-webkit-progress-bar {
        border-radius: 10px;
      }
      ::-webkit-progress-value {
        border-radius: 10px;
        background-color: #ff7c2d;
      }
    }
  }
  h4 {
    margin-left: 8px;
  }
`;

export const StatsInfo = styled.div`
  color: #fff;
  width: 292px;
  margin: 25px 0 0px 30px;
  h1 {
    margin: 0;
  }
  #types {
    display: flex;
  }
`;
export const TypesBackground = styled.p`
  margin: 0 8px 0 0;
  border-radius: 8px;
  padding: 3px;
  background-color: ${(props) => typesColors[props.type]};
`;

export const MovesDetails = styled.div`
  width: 292px;
  height: 400px;
  background-color: #fff;
  color: #000;
  z-index: 1;
  margin-top: 25px;
  border-radius: 8px;
  h3 {
    margin: 12px;
  }
  p {
    margin: 12px;
  }
`;

export const PhotoDetails = styled.div`
  img {
    width: 300px;
    position: absolute;
    top: 0px;
    right: 130px;
  }
`;
