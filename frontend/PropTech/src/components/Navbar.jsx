const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full px-6 py-4 bg-white shadow z-100">
      <div className="flex items-center">
        <img src="/Logo.svg" alt="Logo" className="w-32 h-10 mr-2" />
      </div>
      <ul className="flex space-x-4 text-sm font-medium text-green-700">
        <li>
          <a href="#about" className="hover:text-secondary-500">Sobre nosotros</a>
        </li>
        <li>
          <a href="#about" className="hover:text-secondary-500">Como Funciona</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-secondary-500">Testimonios</a>
        </li>
        <li>
          <a href="#services" className="hover:text-secondary-500">FAQ</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-secondary-500">Contacto</a>
        </li>
      </ul>
      <div className="space-x-2">
        <button className="px-4 py-2 rounded text-secondary-500 hover:bg-yellow-400 hover:text-white">
          Iniciar sesión
        </button>
        <button className="px-4 py-2 rounded text-secondary-500 hover:bg-yellow-400 hover:text-white">
          Registrarse
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
