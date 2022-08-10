import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/coordinator";

import pokelogo from "../../assets/img/pokelogo.png";
import pokebola from "../../assets/img/pokebola.png";

import {
  Header,
  ImgHeader,
  Container,
  MainContainer,
  CardPokemon,
  NameAndType,
  PokemonTypes,
  Ptypes,
  ButtonDetalhes,
  PokemonImg,
  ImageAndCapture,
  ButtonExcluir,
} from "./styled";

export const Pokedex = () => {
  const navigate = useNavigate();

  const { pokedex, setPokedex } = useContext(GlobalContext);

  const excluirPokemon = (id) => {
    if (window.confirm("Deseja excluir ?")) {
      const newPokemons = pokedex.filter((itens) => {
        return itens.id !== id;
      });
      setPokedex([...newPokemons]);
    }
  };

  return (
    <div>
      <Header>
        <h2 onClick={() => goTo(navigate, "/")}> {` < Todos Pokémons `}</h2>
        <ImgHeader src={pokelogo} />
        <div></div>
      </Header>
      <Container>
        <h1>Meus Pokémons</h1>
        <MainContainer>
          {pokedex.length === 0 && <p>Você não tem Pokémons :( </p>}
          {pokedex?.map((pokemon) => {
            return (
              <CardPokemon
                type={pokemon?.types[0]?.type?.name}
                key={pokemon.id}
              >
                <NameAndType>
                  <p>{`#${pokemon.id}`}</p>
                  <h3>{pokemon.name.toUpperCase()}</h3>
                  <PokemonTypes>
                    {pokemon.types.map((type) => {
                      return (
                        <Ptypes type={type.type.name} key={type.type.name}>
                          {type.type.name}
                        </Ptypes>
                      );
                    })}
                  </PokemonTypes>
                  <ButtonDetalhes>Detalhes</ButtonDetalhes>
                </NameAndType>
                <ImageAndCapture>
                  <PokemonImg>
                    <img id="backpoke" src={pokebola} alt="pokebola" />
                    <img
                      src={
                        pokemon.sprites.other["official-artwork"].front_default
                      }
                      alt={pokemon.name}
                    />
                  </PokemonImg>
                </ImageAndCapture>
                <ButtonExcluir onClick={() => excluirPokemon(pokemon.id)}>
                  Excluir
                </ButtonExcluir>
              </CardPokemon>
            );
          })}
        </MainContainer>
      </Container>
    </div>
  );
};
