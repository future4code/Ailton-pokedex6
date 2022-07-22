import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CardPokemon,
  PokemonImg,
  PokemonTypes,
  NameAndType,
  ImageAndCapture
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  const { pokemons, pokedex, setPokedex } = useContext(GlobalContext)


  const addPokemons = (id) => {
    const index = pokedex.some((pokemon) => pokemon.id === id);

    if(!index) {
      const pokemonAdd = pokemons.filter((itens) => {
        return  itens.id === id
      })
      setPokedex([...pokedex, ...pokemonAdd])
    }else {
      alert("O pokemon ja esta na pokedex")
    }
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
        {pokemons?.map((pokemon, index) => {
          console.log(pokemon)
          return <CardPokemon key={pokemon.id}>
            <NameAndType>
              <div>
              <p>{`#${pokemon.id}`}</p>
              <h3>{pokemon.name}</h3>
              </div>
              <PokemonTypes>
                {pokemon.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>
                })}
              </PokemonTypes>
              <button onClick={() => goTo(navigate, `/details/${pokemon.id}`)}>
                Detalhes 
              </button>
            </NameAndType>
            <ImageAndCapture>
              <PokemonImg>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt={pokemon.name} />
              </PokemonImg>
              <div>
                <button onClick={() => addPokemons(pokemon.id)}>Capturar!</button>
              </div>
            </ImageAndCapture>
          </CardPokemon>
        })}
      </MainContainer>
    </div>
  );
};
