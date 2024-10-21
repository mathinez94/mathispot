import { createBrowserRouter } from "react-router-dom";
import { News } from '../pages/News'
import { Prediction } from '../pages/Prediction'
import { Livescore } from '../pages/Livescore'
import Live from "../livescore_pages/Live";
import Date from "../livescore_pages/Date";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <News />
    },
    {
        path: '/prediction',
        element: <Prediction />
    },
    {
        path: '/livescore',
        element: <Livescore />
    },
    {
        path: '/live',
        element: <Live />
    },
    {
        path: '/date',
        element: <Date />
    },
])
