import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../global/GlobalContext";
import { goTo } from '../../routes/coordinator'
import { Stats } from "./styled"
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";


export const DetailsPage = () => {

    const [pokemonDetails, setPokemonDetails] = useState(undefined)

    const navigate = useNavigate()
    const pathParams = useParams()
    const { pokemons } = useContext(GlobalContext)
 
     useEffect(() => {
             axios
                 .get(`${BASE_URL}/${pathParams.id}/`)
                 .then((res) => {
                     setPokemonDetails(res.data)
                 })
                 .catch((err) => {
                     console.log(err)
                 })     
     }, [])

    return (
        <div>
            {pokemonDetails?.stats.map((pokemon) => {
               return <div key={pokemon.id}>
                    <Stats>
                    <p>{pokemon.stat.name}:</p>
                    <p>{pokemon.base_stat}</p>
                    <img src={pokemon.sprites} />
                    </Stats>
                
               </div>
            })}
            
            <button onClick={() => goTo(navigate, "/")}>Voltar para Home</button>
            <button onClick={() => goTo(navigate, "/pokedex")}>Ir para pokédex</button>
        </div>
    )
}
