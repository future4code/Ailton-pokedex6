import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";

import { goTo } from "../../routes/coordinator";
import pokelogo from "../../assets/img/pokelogo.png";
import pokebola from "../../assets/img/pokebola.png";
import Loading from "../../components/Loading/Loading";

import {
  Header,
  ImgHeader,
  ButtonHeader,
  ButtonHeaderContainer,
  TextHeaderContainer,
  Container,
  MainContainer,
  CardPokemon,
  PokemonImg,
  PokemonTypes,
  Ptypes,
  NameAndType,
  ButtonDetalhes,
  ButtonCapturar,
  ImageAndCapture,
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  const { pokemons, pokedex, setPokedex, removeLoading } =
    useContext(GlobalContext);

  const addPokemons = (id) => {
    const index = pokedex.some((pokemon) => pokemon.id === id);

    if (!index) {
      const pokemonAdd = pokemons.filter((itens) => {
        return itens.id === id;
      });
      setPokedex([...pokedex, ...pokemonAdd]);
      alert(`Pokemon adicionado a sua Pokedex`);
    } else {
      alert("O pokemon ja esta na pokedex");
    }
  };

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
      <Container>
        <h1>Todos os Pokémons</h1>
        <MainContainer>
          {!removeLoading && <Loading />}
          {pokemons?.map((pokemon, index) => {
            return (
              <CardPokemon
                type={pokemon?.types[0]?.type?.name}
                key={pokemon.id}
              >
                <NameAndType>
                  <div>
                    <p>{`#${pokemon.id}`}</p>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                  </div>
                  <PokemonTypes>
                    {pokemon.types.map((type) => {
                      return (
                        <Ptypes type={type.type.name} key={type.type.name}>
                          {type.type.name}
                        </Ptypes>
                      );
                    })}
                  </PokemonTypes>
                  <ButtonDetalhes
                    onClick={() => goTo(navigate, `/details/${pokemon.id}`)}
                  >
                    Detalhes
                  </ButtonDetalhes>
                </NameAndType>
                <ImageAndCapture>
                  <PokemonImg>
                    <img
                      id="backpoke"
                      src={pokebola}
                      alt="background pokemon"
                    />
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                        index + 1
                      }.png`}
                      alt={pokemon.name}
                    />
                  </PokemonImg>
                </ImageAndCapture>
                <ButtonCapturar onClick={() => addPokemons(pokemon.id)}>
                  Capturar!
                </ButtonCapturar>
              </CardPokemon>
            );
          })}
        </MainContainer>
      </Container>
    </div>
  );
};
