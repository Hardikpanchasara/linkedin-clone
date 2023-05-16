import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";

const MainRoutes = createBrowserRouter([
    {
        index : true ,
        element : <Login />,
    },
    {
        path : "login",
        element : <Login /> ,
    },
])

export default MainRoutes