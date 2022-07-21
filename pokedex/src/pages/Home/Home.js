import React, { useEffect, useState } from "react";
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
  CardPokemon,
  PokemonImg,
  PokemonTypes,
  NameAndType,
  ImageAndCapture
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])


  const getPokemons = async () => {
    const arrayNumber = Array.from({ length: 20 }, (_, index) => ++index)
    const pokemonsAll = arrayNumber.map(async (numberpok) => {
      const res = await axios.get(`${BASE_URL}/${numberpok}/`)
      return res.data
    })
    const resolvedPokemons = await Promise.all(pokemonsAll)

    setPokemons(resolvedPokemons)
    console.log(resolvedPokemons)
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
              <p>Detalhes</p>
            </NameAndType>
            <ImageAndCapture>
              <PokemonImg>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
              </PokemonImg>
              <div>
                <button>Capturar!</button>
              </div>
            </ImageAndCapture>
          </CardPokemon>
        })}
      </MainContainer>

      <button onClick={() => goTo(navigate, "/details")}>
        Ir para detalhes
      </button>
    </div>
  );
};
