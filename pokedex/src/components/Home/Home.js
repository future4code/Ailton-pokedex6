import React from 'react'
import { goTo } from '../routes/coordinator'
import { useNavigate } from "react-router-dom"
import pokelogo from "../img/pokelogo.png"
import {
    Header,
    ImgHeader,
    ButtonHeader,
    ButtonHeaderContainer,
    TextHeaderContainer
} from "./styled"

export const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <TextHeaderContainer>
                 oi pokemigos
                </TextHeaderContainer>
               
                <ImgHeader src={pokelogo} />
             
                <ButtonHeaderContainer>
                <ButtonHeader onClick={() => goTo(navigate, "/pokedex")}>Pokédex</ButtonHeader>
                </ButtonHeaderContainer>
            </Header>
            <p>Home</p>
            <button onClick={() => goTo(navigate, "/details")}>Ir para detalhes</button>
        </div>
    )
}
