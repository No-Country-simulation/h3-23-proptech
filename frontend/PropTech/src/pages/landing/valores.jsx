

const Valores = () => {
    const valores = [
        {
            titulo: "Confianza",
            icono: "/handshake-icon.png", // Reemplaza con la ruta de tu imagen
        },
        {
            titulo: "Innovación",
            icono: "/lightbulb-icon.png", // Reemplaza con la ruta de tu imagen
        },
        {
            titulo: "Impacto",
            icono: "/impact-icon.png", // Reemplaza con la ruta de tu imagen
        },
    ];

    return (
        <section className="flex flex-col items-center min-h-screen py-10 bg-gray-100">
            <h2 className="mb-8 text-2xl font-bold text-green-800">Nuestros valores</h2>
            <div className="flex gap-8">
                {valores.map((valor, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="flex items-center justify-center w-24 h-24 mb-4 bg-yellow-500 rounded-full shadow-md">
                            <img src={valor.icono} alt={valor.titulo} className="w-10 h-10" />
                        </div>
                        <p className="font-semibold text-green-800">{valor.titulo}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Valores;
