import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Pokemon from "../Pages/Pokemon/Index";
import PokemonDetail from "../Pages/Pokemon/PokemonDetail";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/pokemon',
        element: <Pokemon />
    },
    {
        path: '/pokemon/:id',
        element: <PokemonDetail />
    }
]);