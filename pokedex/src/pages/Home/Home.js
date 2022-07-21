import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls"
import axios from "axios"
import { GlobalContext } from "../../global/GlobalContext";

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

  const { pokemons } = useContext(GlobalContext)


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
          {pokemons?.map((pokemon) => {
            return <CardPokemon key={pokemon.id}>
            <p>{`#${pokemon.id}`}</p>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            {pokemon.types.map((type) => {
              return <p>{type.type.name}</p>
            })}
            <div>
              <button>Capturar!</button>
              <p>Detalhes</p>
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
