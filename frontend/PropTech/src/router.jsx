import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/home'
import SignUp from './pages/signUp/signup'
import SignIn from './pages/signIn/signin'
import Error from './pages/error/error404'

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
    }
]);

export default router