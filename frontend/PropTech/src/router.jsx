import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/home'
import SignUp from './pages/signUp/signup'
import SignIn from './pages/signIn/signin'
import Error from './pages/error/error404'
import Landing from "./pages/landing/landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/landing",
        element: <Landing />
    }
]);

export default router