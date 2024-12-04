

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {/* Título */}
        <h2 className="mb-2 text-2xl font-bold text-green-800">
          Contáctate con nosotros
        </h2>
        <p className="mb-6 text-green-700">Déjanos tu consulta</p>

        {/* Formulario */}
        <form>
          {/* Nombre y apellido */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              placeholder="Laura Lopez"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Correo electrónico */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@gmail.com"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Mensaje */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Escribir mensaje..."
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
