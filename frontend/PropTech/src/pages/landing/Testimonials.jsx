

const testimonials = [
  {
    id: 1,
    quote: "Invierte en la empresa hace 2 años y por ahora todo muy bien. Estoy contento con los resultados que obtengo.",
    name: "Agustin Sosa",
    image: "/path-to-image1.jpg", // Cambiar por la ruta real de la imagen
    stars: 4,
    bgColor: "bg-white",
    textColor: "text-black",
    quoteColor: "text-yellow-400",
  },
  {
    id: 2,
    quote: "Por ahora todo bien, pedí un financiamiento para comprarme mi casa, me lo dieron rápido, la gestión fue fácil y resolvieron todas mis dudas.",
    name: "Marta Rodríguez",
    image: "/path-to-image2.jpg", // Cambiar por la ruta real de la imagen
    stars: 5,
    bgColor: "bg-green-700",
    textColor: "text-white",
    quoteColor: "text-white",
  },
  {
    id: 3,
    quote: "Atención rápida y eficiente, muy conforme con los resultados que estoy obteniendo y que puedo ver todo el avance de mis inversiones desde el celular.",
    name: "Juan Carlos Bonatti",
    image: "/path-to-image3.jpg", // Cambiar por la ruta real de la imagen
    stars: 4,
    bgColor: "bg-white",
    textColor: "text-black",
    quoteColor: "text-yellow-400",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-green-100">
      {/* Título */}
      <h2 className="mb-12 text-2xl font-bold text-center text-green-800">
        Te ayudamos a lograr eso que tanto deseas
      </h2>

      {/* Contenedor de tarjetas */}
      <div className="grid gap-6 px-4 md:grid-cols-3 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`p-6 rounded-lg shadow-md ${testimonial.bgColor}`}
          >
            {/* Comillas */}
            <div className={`${testimonial.quoteColor} text-3xl mb-4`}>
              <span>&ldquo;</span>
            </div>

            {/* Testimonio */}
            <p className={`mb-4 ${testimonial.textColor}`}>{testimonial.quote}</p>

            {/* Información del usuario */}
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <h3 className={`font-semibold ${testimonial.textColor}`}>
                  {testimonial.name}
                </h3>
                {/* Estrellas */}
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.9 8.8h9.2l-7.4 5.4 2.9 8.8-7.4-5.4-7.4 5.4 2.9-8.8-7.4-5.4h9.2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
