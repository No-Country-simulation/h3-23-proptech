import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/home'
import Error from './pages/error/error404'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    }
]);

export default router