const StepsSection = () => {
    return (
        <div className="h-[1000px] flex flex-col items-center px-8 py-16 bg-white md:grid md:grid-cols-2 md:gap-16">
            {/* Imagen con diseño */}
            <div className="relative flex justify-center">
                {/* Contenedor de la imagen */}
                <div className="relative w-[472px] h-[662px]">
                    {/* Círculo amarillo detrás */}
                    <div
                        className="absolute w-[600px] h-[336px] rounded-full bg-primary-400 shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
                        style={{
                            top: "50%",
                            left: "-100px",
                            transform: "translateY(-10%) rotate(22.28deg)",
                        }}
                    ></div>
                    {/* Imagen */}
                    <img
                        src="/imagen.png"
                        alt="Persona trabajando"
                        className="absolute object-cover w-full h-full rounded-xl"
                    />
                </div>
            </div>

            {/* Sección de texto */}
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-center text-secondary-500 md:text-left">
                    Invertí en 3 simples pasos
                </h2>
                <p className="mt-2 text-center text-black md:text-left">
                    Comienza a invertir hoy mismo, sin complicaciones.
                </p>

                {/* Lista de pasos */}
                <div className="mt-8 space-y-4">
                    {/* Paso 1 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-secondary-500">
                            1
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary-500">
                                Explora tus opciones
                            </h3>
                            <p className="text-black">
                                Usa el simulador para calcular las posibilidades de inversión
                                o financiamiento. ¡No necesitas registrarte para probarlo!
                            </p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-secondary-500">
                            2
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary-500">
                                Regístrate para avanzar
                            </h3>
                            <p className="text-black">
                                Crea tu cuenta en minutos para acceder a todos los servicios y
                                beneficios.
                            </p>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-secondary-500">
                            3
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary-500">
                                Invierte y gestiona
                            </h3>
                            <p className="text-black">
                                Elige tu plan, realiza tu inversión y sigue el progreso desde
                                tu panel personal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;
