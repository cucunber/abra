import { createBrowserRouter } from "react-router-dom";
import { Desktop } from "../../pages/desktop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Desktop />,
    }
])
