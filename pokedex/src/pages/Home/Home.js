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

  const { pokemons, setPokedex } = useContext(GlobalContext)
  const pokemonsSelected = []

  const addPokemons = (id) => {
    const pokemonsPokedex = [...pokemons]
    const pokemonAdd = pokemonsPokedex.filter((itens) => {
      return  itens.id === id
    })
    pokemonsSelected.push(pokemonAdd[0])
    setPokedex(pokemonsSelected)

    
    /* const index = pokemons.findIndex((i) => i.id === id.id);
    console.log(index)
    if(id === -1){
    } */
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
        {pokemons?.map((pokemon) => {
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
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
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
