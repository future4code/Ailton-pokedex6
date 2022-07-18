import React from 'react'
import { goTo } from '../routes/coordinator'
import { useNavigate } from "react-router-dom"

export const DetailsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>DetailsPage</p>
            <button onClick={() => goTo(navigate, "/")}>Voltar para Home</button>
            <button onClick={() => goTo(navigate, "/pokedex")}>Ir para pokédex</button>
        </div>
    )
}
