import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
