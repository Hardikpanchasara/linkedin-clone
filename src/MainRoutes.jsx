import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";

const MainRoutes = createBrowserRouter([
    {
        path: "/" ,
        element : <Header />,
        errorElement : <ErrorPage />,
        children : [
            {
                index : true ,
                element : <Home /> ,
            },
        ],
    },
    {
        path : "/login",
        element : <Login /> ,
    },
])

export default MainRoutes