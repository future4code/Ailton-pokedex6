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
  CardPokemon
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([])

  console.log("todos os pokemons",pokemons)
  
  const data = useRequestData(`${BASE_URL}`)

  useEffect(() => {
    getDetails()
  }, [])

  const getDetails = async () => {
    const dados = []

    try {
      for(let i = 1; i < data.length; i++) {

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        dados.push(res.data)
      }
    }catch(err) {
      console.log(err)
    }
    setPokemons(dados)
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
            <p>{`#${pokemon.id}`}</p>
            <h3>{pokemon.name}</h3>
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
