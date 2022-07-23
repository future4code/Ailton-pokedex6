import React, { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from "react-router-dom"
import { goTo } from '../../routes/coordinator'
import pokelogo from "../../assets/img/pokelogo.png"
import pokebola from "../../assets/img/pokebola.png"

import { Header, ImgHeader, CardPokemon } from "./styled"

export const Pokedex = () => {
    const navigate = useNavigate()

    const { pokedex } = useContext(GlobalContext)

    
    return (
        <div>
            <Header>
                <button onClick={() => goTo(navigate, "/")}>Todos Pokémons</button>
                <ImgHeader src={pokelogo}/>
            </Header>
            <h1>Meus Pokémons</h1>
            {pokedex?.map((pokemon, index) => {
                console.log(pokemon)
                return <CardPokemon key={pokemon.id}> 
                    <p>{`#${pokemon.id}`}</p>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <div>
                        <p>{pokemon.types[0].type.name}</p>
                        <p>{pokemon.types[1].type.name}</p>
                    </div>
                    <p>Detalhes</p>
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                        index + 1
                        }.png`} alt={pokemon.name} />
                        <img src={pokebola} alt='pokebola' />
                        <button>Excluir</button>
                    </div>
                    </CardPokemon>
            })}
        </div>

    )
}
