import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const validate = () => {
        const newErrors = {};
        
        // Validaciones
        if (!formData.username) {
            newErrors.username = "Este campo es obligatorio";
        } else if (formData.username.length < 3) {
            newErrors.username = "El nombre de usuario es demasiado corto";
        }

        if (!formData.password) {
            newErrors.password = "Este campo es obligatorio";
        } else if (formData.password.length < 8) {
            newErrors.password = "La contraseña es demasiado corta";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const response = await fetch(`http://localhost:8080/api/v1/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.username,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data)
                localStorage.setItem('jwtToken', data.jwtToken);
                localStorage.setItem('id', data.id);
                localStorage.setItem('role', data.role);
                setMessage("¡Inicio de sesión exitoso!");
                navigate('/');
            } else {
                setMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            setMessage("Error de conexión con el servidor " + error);
        }
    };

    return (
        <div>
            <Header />
            <main className="flex justify-center items-center min-h-screen">
                <div className="max-w-md mx-auto bg-black p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Iniciar sesión
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            placeholder="Nombre de Usuario"
                            className="pl-4 w-full border h-10 rounded text-black"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                        <input
                            placeholder="Contraseña"
                            className="pl-4 w-full border h-10 rounded text-black"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-gradient-to-r from-[#9333ea] to-[#2563eb] hover:from-[#9333ea]/90 hover:to-[#2563eb]/90 transition-all duration-300 h-10 rounded"
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    {message && <p className="mt-4 text-center">{message}</p>}

                    <div className="flex flex-col items-center mt-6">
                        <p className="text-center text-sm text-gray-400">
                            ¿No tienes una cuenta?{" "}
                        </p>
                        <a
                            href="/signup"
                            className="bg-clip-text hover:underline"
                        >
                            Regístrate
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SignIn;
