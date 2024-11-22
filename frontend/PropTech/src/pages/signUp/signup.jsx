import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Sign() {
    const [formData, setFormData] = useState({
        email: "",
        usuario: "",
        password: "",
        rPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const validate = () => {
        const newErrors = {};

        // Validaciónes
        if (!formData.email) {
            newErrors.email = "Este campo es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El email es inválido";
        }

        if (!formData.usuario) {
            newErrors.usuario = "Este campo es obligatorio";
        } else if (formData.usuario.length < 3) {
            newErrors.usuario = "El nombre es demasiado corto";
        } else if (formData.usuario.length > 20) {
            newErrors.usuario = "Máximo 20 caracteres";
        }

        if (!formData.password) {
            newErrors.password = "Este campo es obligatorio";
        } else if (formData.password.length < 8) {
            newErrors.password = "La contraseña es demasiado corta";
        } else if (
            formData.password.includes(formData.usuario) ||
            formData.password.includes(formData.email)
        ) {
            newErrors.password =
                "La contraseña no debe contener el nombre de usuario o el email";
        } else if (/^\d+$/.test(formData.password)) {
            newErrors.password = "La contraseña no puede ser enteramente numérica";
        } else if (
            ["12345678", "password", "123456789", "qwerty", "abcd1234", "asdf1234"].includes(
                formData.password
            )
        ) {
            newErrors.password = "La contraseña es demasiado común";
        }

        if (!formData.rPassword) {
            newErrors.rPassword = "Este campo es obligatorio";
        } else if (formData.rPassword !== formData.password) {
            newErrors.rPassword = "Las contraseñas no coinciden";
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
            const response = await fetch(`${import.meta.env.VITE_Back}/sign_up`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    username: formData.usuario,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("¡Registro exitoso!");
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
                        Registro de Usuario
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            placeholder="Correo Electrónico"
                            className="pl-4 w-full border h-10 rounded"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}

                        <input
                            placeholder="Nombre de Usuario"
                            className="pl-4 w-full border h-10 rounded"
                            type="text"
                            name="usuario"
                            value={formData.usuario}
                            onChange={handleChange}
                        />
                        {errors.usuario && (
                            <p className="text-red-500 text-sm">{errors.usuario}</p>
                        )}

                        <input
                            placeholder="Contraseña"
                            className="pl-4 w-full border h-10 rounded"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}

                        <input
                            placeholder="Repetir Contraseña"
                            className="pl-4 w-full border h-10 rounded"
                            type="password"
                            name="rPassword"
                            value={formData.rPassword}
                            onChange={handleChange}
                        />
                        {errors.rPassword && (
                            <p className="text-red-500 text-sm">{errors.rPassword}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#9333ea] to-[#2563eb] hover:from-[#9333ea]/90 hover:to-[#2563eb]/90 transition-all duration-300 h-10 rounded"
                        >
                            Registrarme
                        </button>
                    </form>

                    {message && <p className="mt-4 text-center">{message}</p>}

                    <div className="flex flex-col items-center mt-6">
                        <p className="text-center text-sm text-gray-400">
                            ¿Ya tienes cuenta?{" "}
                        </p>
                        <a
                            href="/signin"
                            className="bg-clip-text hover:underline"
                        >
                            Iniciar sesión
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Sign;
