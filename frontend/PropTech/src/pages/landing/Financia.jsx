const AboutSection = () => {
    return (
        <div className="h-[900px] flex flex-col items-center justify-center px-8 py-16 bg-secondary-400 md:grid md:grid-cols-2 md:gap-16">
            {/* Logo e Imagen */}
            <div className="flex items-center justify-center">
                <img src="/Logo.png" alt="Financia.Ia" className="w-[484px] h-[163px] md:w-[600px]" />
            </div>

            {/* Descripción */}
            <div className="mt-8 text-center md:mt-0 md:text-left">
                <p className="font-semibold text-[20px] text-black">
                    Tenemos un propósito claro:{" "}
                    <span className="font-bold text-secondary-500">
                        democratizar las finanzas y empoderar a nuestros usuarios
                    </span>{" "}
                    para que puedan tomar decisiones económicas inteligentes y
                    estratégicas.
                </p>
                <p className="mt-4 text-[20px] font-semibold text-black">
                    Nuestro enfoque combina lo mejor de la tecnología avanzada y el
                    conocimiento humano, brindándote herramientas accesibles y
                    personalizadas para alcanzar tus metas financieras.
                </p>
                <p className="mt-4 text-[20px] font-semibold text-black">
                    Creemos que cada persona merece el acceso a soluciones claras y
                    efectivas que simplifiquen su relación con el dinero, ya sea
                    planificando inversiones, optimizando gastos o construyendo un futuro
                    más seguro.
                </p>
                <p className="mt-4 text-[20px] font-bold text-secondary-500">
                    Nuestro compromiso es ser el aliado que necesitas en cada etapa de tu
                    vida financiera.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
