import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goTo } from "../../routes/coordinator";
import pokelogo from "../../assets/img/pokelogo.png";
import pokebola from "../../assets/img/pokebola.png";
import {
  Header,
  Container,
  DetailsPokemon,
  StatsImg,
  StatsDetails,
  StatsInfo,
  TypesBackground,
  MovesDetails,
  PhotoDetails,
} from "./styled";

export const DetailsPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState(undefined);

  const navigate = useNavigate();
  const pathParams = useParams();
  const { pokedex } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${pathParams.id}/`)
      .then((res) => {
        setPokemonDetails(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const excluir = () => {
    if (pokedex.length === 0) {
      alert("Esse Pokémon não esta na Pokédex");
    } else {
      if (window.confirm("Deseja realmente excluir ?")) {
        alert("Pokémon excluido");
      }
    }
  };

  return (
    <div>
      <Header>
        <h2 onClick={() => goTo(navigate, "/")}>{`< Todos Pokémons`}</h2>
        <img src={pokelogo} alt="logo pokemon" />
        <button onClick={excluir}>Excluir da Pokédex</button>
      </Header>
      <Container>
        <img id="backgroundPokebola" src={pokebola} alt="pokebola" />
        <h1>Detalhes</h1>
        <DetailsPokemon type={pokemonDetails?.types[0]?.type.name}>
          <StatsImg>
            <div id="front">
              <img src={pokemonDetails?.sprites.front_default} />
            </div>
            <div id="back">
              <img src={pokemonDetails?.sprites.back_default} />
            </div>
          </StatsImg>
          <StatsDetails>
            <h3>Base stats</h3>
            {pokemonDetails?.stats?.map((elem, index) => {
              return (
                <div key={index}>
                  <p>{`${elem.stat.name}: ${elem.base_stat}`} </p>
                  <progress value={elem.base_stat} max={"100"} />
                </div>
              );
            })}
            <h4>{`Total: ${pokemonDetails?.stats?.reduce(
              (elemAnt, eleAtu) => elemAnt + eleAtu.base_stat,
              0
            )}`}</h4>
          </StatsDetails>
          <StatsInfo>
            <p>{`#${pokemonDetails?.id}`}</p>
            <h1>{`${pokemonDetails?.name.toUpperCase()}`}</h1>
            <div id="types">
              {pokemonDetails?.types.map((type) => (
                <TypesBackground type={type.type.name}>
                  {type.type.name}
                </TypesBackground>
              ))}
            </div>
            <MovesDetails>
              <h3>Moves:</h3>
              {pokemonDetails?.moves?.slice(0, 4).map((elem) => (
                <p>{elem.move.name}</p>
              ))}
            </MovesDetails>
          </StatsInfo>
          <PhotoDetails>
            <img
              src={
                pokemonDetails?.sprites.other["official-artwork"].front_default
              }
              alt={"pokemonDetails"}
            />
          </PhotoDetails>
        </DetailsPokemon>
      </Container>
    </div>
  );
};
