import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls"
import axios from "axios"

import { goTo } from "../../routes/coordinator";
import pokelogo from "../../assets/img/pokelogo.png";

import {
  Header,
  ImgHeader,
  ButtonHeader,
  ButtonHeaderContainer,
  TextHeaderContainer,
  MainContainer,
  CardPokemon
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  const data = useRequestData(BASE_URL)


  const detalhes = (index) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)})
  }

  return (
    <div>
      <Header>
        <TextHeaderContainer></TextHeaderContainer>

        <ImgHeader src={pokelogo} />

        <ButtonHeaderContainer>
          <ButtonHeader onClick={() => goTo(navigate, "/pokedex")}>
            Pokédex
          </ButtonHeader>
        </ButtonHeaderContainer>
      </Header>

        <h1>Todos os Pokémons</h1>
      <MainContainer>
        {data?.map((pokemon, index) => {
          return <CardPokemon key={pokemon.name}>
            {`#0${index + 1}`}
            <h3>{pokemon.name}</h3>
            <div>
              <button>Capturar!</button>
              <p onClick={() => detalhes(index + 1)}>Detalhes</p>
            </div>
            </CardPokemon>
        })}
      </MainContainer>

      <button onClick={() => goTo(navigate, "/details")}>
        Ir para detalhes
      </button>
    </div>
  );
};
