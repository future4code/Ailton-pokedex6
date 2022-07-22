import React, { useEffect, useState } from "react";
import axios from "axios"
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/urls";

export default function GlobalState(props) {
    const Provider = GlobalContext.Provider
    
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    

    const values = {
        pokemons,
        setPokedex,
        pokedex
    }

    useEffect(() => {
      getPokemons()
    }, [])
  
    const getPokemons = async () => {
      const arrayNumber = Array.from({ length: 20 }, (_, index) => ++index)
      const pokemonsAll = arrayNumber.map( async (numberpok) => {
        const res = await axios.get(`${BASE_URL}/${numberpok}/`)
        return res.data
      })
      const resolvedPokemons = await Promise.all(pokemonsAll)
  
      setPokemons(resolvedPokemons)
    }

    return (
        <Provider value={values}>
            { props.children }
        </Provider>
    )
}