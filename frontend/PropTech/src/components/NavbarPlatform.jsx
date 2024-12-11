import {NavLink} from "react-router-dom";

const NavbarPlatform = () => {
    return (
        <nav className="bg-white text-blue-500 h-screen w-64 font-bold">
            <ul className="flex flex-col items-center justify-center space-y-8">
                <li className="hover:bg-yellow-500 hover:text-white rounded-md p-2">Inicio</li>
                <li className="hover:bg-yellow-500 hover:text-white rounded-md p-2">Perfil</li>
                <li className="hover:bg-yellow-500 hover:text-white rounded-md p-2">Financiamiento</li>
                <li className="hover:bg-yellow-500 hover:text-white rounded-md p-2">Pagos</li>
                <li className="hover:bg-yellow-500 hover:text-white rounded-md p-2">Soporte</li>
            </ul>
        </nav>
    );
};

export default NavbarPlatform;