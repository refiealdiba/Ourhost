import { useState } from "react";
import axios from "axios";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link } from "react-router-dom";
import { UserRound, LockKeyhole } from "lucide-react";
import config from "../../config/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the login logic, such as sending the data to your backend.
        // console.log("Logging in with:", { username, password });
        // Add your login logic here
        try {
            const response = await axios.post(`${config.urlService}/auth/login`, {
                username,
                password,
            });

            console.log("Login response:", response.data.data.username);
            if (response.status === 200) {
                alert("Login successful!");
                // Redirect or perform any other action after successful login
                navigate(`/user/${response.data.data.username}`);
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login. Please try again.");
            return;
        }
    };

    return (
        <AuthLayout auth="login">
            <div className="flex justify-center items-center w-full h-full">
                <div className="font-poppins w-full max-w-xl flex flex-col gap-10">
                    <div>
                        <h2 className="font-medium text-3xl mb-5">Masuk</h2>
                        <p className="text-medium font-normal max-w-2xs">
                            Jika anda belum memiliki akun Anda bisa{" "}
                            <Link to={"/register"} className="text-primary font-semibold">
                                Daftar di sini!
                            </Link>
                        </p>
                    </div>
                    <form className="flex flex-col gap-10" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <div className="flex flex-col justify-center">
                                <UserRound className="absolute text-gray-400" />
                                <input
                                    type="text"
                                    id="username"
                                    className="border-b-2 border-b-[#999999] focus:border-b-[#000842] pl-10 py-2 w-full focus:outline-none focus:ring-0 focus:ring-none transition-all ease-in-out duration-300"
                                    placeholder="Masukkan username anda"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username">Password</label>
                            <div className="flex flex-col justify-center">
                                <LockKeyhole className="absolute text-gray-400" />
                                <input
                                    type="text"
                                    id="username"
                                    className="border-b-2 border-b-[#999999] pl-10 py-2 w-full focus:outline-none focus:ring-0 focus:ring-none focus:border-b-[#000842] transition-all ease-in-out duration-300"
                                    placeholder="Masukkan password anda"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <Link to={"/"}>Lupa password?</Link>
                        </div>
                        <button className="rounded-full bg-primary py-5 text-white">Masuk</button>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
