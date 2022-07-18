import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Pokedex } from "../Pokedex/Pokedex";
import { DetailsPage } from "../DetailsPage/DetailsPage";

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/details" element={<DetailsPage />} />
        </Routes>
        </BrowserRouter>
    )
}