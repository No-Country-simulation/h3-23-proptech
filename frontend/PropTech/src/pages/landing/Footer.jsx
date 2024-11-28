

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-blue-900">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
        {/* Sección izquierda: Logo y derechos */}
        <div className="flex flex-col items-center mb-6 md:items-start md:mb-0">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="w-6 h-6 border-2 border-yellow-400 rounded-sm"></div>
            <h1 className="text-lg font-bold text-yellow-400">FINANCIA.AI</h1>
          </div>
          <p className="mt-4 text-sm text-center md:text-left">
            Copyright © 2024 Financia.AI <br />
            Todos los derechos reservados
          </p>
          {/* Redes sociales */}
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Sección derecha: Enlaces */}
        <div className="text-center md:text-right">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Cómo funciona
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
