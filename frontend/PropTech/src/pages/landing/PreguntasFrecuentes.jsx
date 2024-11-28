
import { FiChevronRight } from "react-icons/fi";

const PreguntasFrecuentes = () => {
    const preguntas = [
        "¿Puedo invertir en más de un proyecto a la vez?",
        "¿Cómo puedo saber si mi inversión fue acreditada?",
        "¿Hay algún límite de inversión?",
        "¿Qué métodos de pago aceptan?",
        "¿Qué métodos de pago aceptan?", // Repetida en el diseño, pero puedes cambiarla
    ];

    return (
        <section className="flex flex-col items-center min-h-screen py-10 bg-gray-100">
            <h2 className="mb-8 text-2xl font-bold text-green-800">Preguntas frecuentes</h2>
            <div className="flex flex-col w-full max-w-2xl gap-4">
                {preguntas.map((pregunta, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between px-6 py-4 transition-shadow bg-gray-200 rounded-lg shadow-md hover:shadow-lg"
                    >
                        <p className="font-medium text-blue-900">{pregunta}</p>
                        <FiChevronRight className="text-xl text-blue-900" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PreguntasFrecuentes;
