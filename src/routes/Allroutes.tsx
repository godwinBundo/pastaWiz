import { createBrowserRouter } from "react-router-dom"
import WebLayout from "../layout/WebLayout"
import LandingPage from "../pages/Landing/LandingPage"


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            }
        ]
    }
])