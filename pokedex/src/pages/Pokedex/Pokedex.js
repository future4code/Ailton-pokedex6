import React from 'react'
import { useNavigate } from "react-router-dom"
import { goTo } from '../../routes/coordinator'
import pokelogo from "../../assets/img/pokelogo.png"
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
