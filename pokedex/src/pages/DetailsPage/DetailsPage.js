import React from 'react'
import { useNavigate } from "react-router-dom"

import { goTo } from '../../routes/coordinator'


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
