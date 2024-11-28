function Conectando() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <main className="container flex flex-col items-center px-6 mx-auto md:flex-row md:px-20 md:space-x-10">
                {/* Texto Izquierdo */}
                <div className="w-full md:w-1/2 md:pr-10">
                    <h1 className="mb-4 text-[5vw] font-bold leading-tight text-secondary-500 md:text-4xl">
                        Conectando oportunidades
                    </h1>
                    <p className="mb-6 text-[3.5vw] text-black md:text-lg">
                        Somos el nexo entre eso que deseas y lo que tenés.
                    </p>
                    <div className="flex space-x-4">
                        <button className="flex-1 px-6 py-3 text-base border rounded border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white">
                            Quiero invertir
                        </button>
                        <button className="flex-1 px-6 py-3 text-base border rounded border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white">
                            Quiero financiamiento
                        </button>
                    </div>
                </div>
                {/* Imagen Derecha */}
                <div className="flex justify-center w-full mt-10 md:w-1/2 md:mt-0 md:pl-10">
                    <img
                        src="/Vector.svg"
                        alt="Conectando oportunidades"
                        className="rounded-lg shadow-lg max-w-[80%] md:max-w-full"
                    />
                </div>
            </main>
        </div>
    );
}

export default Conectando;
