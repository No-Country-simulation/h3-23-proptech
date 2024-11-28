

const CardsSection = () => {
    const cards = [
        {
            id: 1,
            title: "Genera ganancias fácil y rápido",
            description:
                "Regístrate y carga la documentación, una vez validada, elegí el monto a invertir y ¡Ya estás listo para generar ganancias!",
            image: "/path-to-image1.jpg", // Cambia esto por el path real
            highlight: "fácil y rápido",
        },
        {
            id: 2,
            title: "Financiamiento flexible y accesible",
            description:
                "Mira las condiciones de tu financiamiento basado en variables como plazo, monto y tasa de interés, desde el simulador de crédito.",
            image: "/path-to-image2.jpg", // Cambia esto por el path real
            highlight: "flexible y accesible",
        },
        {
            id: 3,
            title: "Todo en un mismo lugar",
            description:
                "Accede a toda la información de tu inversión o financiamiento desde tu perfil.",
            image: "/path-to-image3.jpg", // Cambia esto por el path real
            highlight: "mismo lugar",
        },
    ];

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-secondary-400">
            {/* Título centrado */}
            <header className="py-6 mt-8 text-center">
                <h1 className="text-4xl font-bold text-secondary-500">
                    Elegí Financia.AI
                </h1>
            </header>

            {/* Contenedor para centrar las tarjetas */}
            <main className="flex items-center justify-center flex-1 w-full">
                <div className="grid grid-cols-1 gap-6 px-6 mb-8 md:grid-cols-3 md:px-16">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="w-[349px] h-[475px] overflow-hidden bg-white rounded-lg shadow-lg"
                        >
                            {/* Imagen de la tarjeta */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="object-cover w-full h-80"
                            />
                            {/* Contenido de la tarjeta */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-tertiary-400">
                                    {card.title.split(card.highlight)[0]}
                                    <span className="text-primary-500">{card.highlight}</span>
                                </h2>
                                <p className="mt-2 text-[16px] text-gray-800">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CardsSection;
