import React from 'react'
import { goTo } from '../routes/coordinator'
import { useNavigate } from "react-router-dom"
import pokelogo from "../img/pokelogo.png"
import { Header } from "./styled"

export const Pokedex = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <img src={pokelogo}/>
                <button onClick={() => goTo(navigate, "/")}>Voltar para Home</button>
            </Header>
            <p>Pokedex</p>
            <button onClick={() => goTo(navigate, "/details")}>Ir para detalhes</button>
        </div>

    )
}
