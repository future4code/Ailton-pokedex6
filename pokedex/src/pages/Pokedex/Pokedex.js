import React from 'react'
import { useNavigate } from "react-router-dom"
import { goTo } from '../../routes/coordinator'
import pokelogo from "../../assets/img/pokelogo.png"
import { Header, ImgHeader } from "./styled"

export const Pokedex = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <button onClick={() => goTo(navigate, "/")}>Todos Pokémons</button>
                <ImgHeader src={pokelogo}/>
            </Header>
            <h1>Meus Pokémons</h1>
            <button onClick={() => goTo(navigate, "/details")}>Ir para detalhes</button>
        </div>

    )
}
