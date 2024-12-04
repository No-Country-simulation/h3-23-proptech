import { useState } from "react";

const SimulatorForm = () => {
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [prestamo, setPrestamo] = useState(0);
    const [cuota, setCuota] = useState(0);

    const plazos = [
        {value: 12, label: '12 meses'},
        {value: 24, label: '24 meses'},
        {value: 36, label: '36 meses'}
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        const resultado = calcularCredito(monto, plazo);
        setCuota(resultado.toFixed(2));

    };

    const calcularCredito = (monto, plazo) => {
        const interesMensual = 0.8/100;
        const interesAnual = Math.pow((1+interesMensual), 12);
        // Formula matematica para calcular las cuotas usando el modelo frances
        const cuotaMensual = monto * (interesMensual * Math.pow(1 + interesMensual, plazo)) / (Math.pow(1 + interesMensual, plazo) - 1);
        console.log('Calculando crédito con monto:', monto, 'y plazo:', plazo);
        const totalCredito = (cuotaMensual * plazo).toFixed(2);
        setPrestamo(totalCredito);
        return cuotaMensual;
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-blue-500">En blanco</div>
            <div className="w-1/2 p-4 flex-col bg-white text-blue-900">
                <h2 className="text-2xl font-bold mb-4">Simulador de Créditos</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="valor-lote" className="mb-3">¿Cuánto vale el lote que quieres comprar?</label>
                    <input type="number" name="valor-lote" id="valor-lote" className="bg-white border border-black rounded-md mb-5 py-1"/>

                    <label htmlFor="monto-prestar" className="mb-3">¿Cuánto dinero necesitas?</label>
                    <input type="number" name="monto-prestar" id="monto-prestar" onChange={(e) => setMonto(e.target.value)} className="bg-white border border-black rounded-md mb-5 py-1"/>

                    <label htmlFor="ingreso mensual" className="mb-3">¿Cuál es tu ingreso mensual bruto?</label>
                    <input type="number" name="ingreso mensual" id="ingreso mensual" className="bg-white border border-black rounded-md appearance-none mb-5 py-1"/>

                    <label htmlFor="plazo" className="mb-3">Selecciona el plazo de tu crédito</label>
                    <select name="plazo" id="plazo" onChange={(e) => setPlazo(e.target.value)} className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1 px-3 bg-white border-solid border border-black mb-5" required>
                        <option value="">Selecciona un plazo</option>
                        {plazos.map((plazo) => (
                            <option value={plazo.value} key={plazo.value}>{plazo.label}</option>
                        ))}
                    </select>

                    <div className="mb-5" id="resultados">
                        <div>
                            <h3 className="text-black">Te podríamos prestar hasta</h3>
                            <span className="font-bold">{prestamo.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD</span>
                        </div>
                        <div>
                            <h3 className="text-black">Pago mensual</h3>
                            <span className="font-bold">{cuota.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD</span>
                        </div>
                    </div>

                    <button
                        type="submit" 
                        className="bg-yellow-500 text-white  rounded-md hover:bg-yellow-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">Calcular</button>
                </form>
                
            </div>
        </div>
    );
};

export default SimulatorForm;