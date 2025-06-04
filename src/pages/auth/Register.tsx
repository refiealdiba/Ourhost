import { useState } from "react";
import axios from "axios";
import config from "../../config/config";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, LockKeyhole, Globe } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [domain, setDomain] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("🚀 [Frontend] Register form submitted");
        console.log("📥 [Frontend] Form data:", { email, username, domain });
        console.log("🔗 [Frontend] Service URL:", config.urlService);

        // Validasi konfirmasi password
        if (password !== confirmPassword) {
            console.log("❌ [Frontend] Password confirmation mismatch");
            alert("Password dan konfirmasi password tidak sama!");
            return;
        }

        setIsLoading(true);

        try {
            console.log("📡 [Frontend] Sending registration request...");

            const response = await axios.post(`${config.urlService}/account/register`, {
                email,
                username,
                password,
                domain,
            });

            console.log("📨 [Frontend] Response received:", {
                status: response.status,
                data: response.data,
            });

            if (response.status === 200) {
                console.log("✅ [Frontend] Registration successful!");
                alert(
                    `Registration successful! Welcome ${response.data.username}!\nDomain: ${response.data.domain}`
                );
                navigate("/login");
            } else {
                console.log("⚠️ [Frontend] Unexpected response status:", response.status);
                alert("Registration failed. Please try again.");
            }
        } catch (error: any) {
            console.error("💥 [Frontend] Registration error:", error);

            let errorMessage = "An unknown error occurred during registration.";

            if (error.response) {
                // Server responded with error status
                console.error("🌐 [Frontend] Server response error:", {
                    status: error.response.status,
                    statusText: error.response.statusText,
                    data: error.response.data,
                });

                if (error.response.data && error.response.data.message) {
                    errorMessage = error.response.data.message;
                } else {
                    errorMessage = `Server error: ${error.response.status} - ${error.response.statusText}`;
                }
            } else if (error.request) {
                // Request was made but no response received
                console.error("📡 [Frontend] Network error - no response:", error.request);
                errorMessage = "Network error. Please check your connection and try again.";
            } else {
                // Something else happened
                console.error("🔧 [Frontend] Request setup error:", error.message);
                errorMessage = `Request error: ${error.message}`;
            }

            alert(`Registration failed!\n${errorMessage}`);
        } finally {
            setIsLoading(false);
            console.log("🏁 [Frontend] Registration attempt completed");
        }
    };

    return (
        <AuthLayout auth="register">
            <div className="flex justify-center items-center w-full h-full">
                <div className="font-poppins w-full max-w-xl flex flex-col gap-10">
                    <div>
                        <h2 className="font-medium text-3xl mb-5">Daftar</h2>
                        <p className="text-medium font-normal max-w-2xs">
                            Jika anda sudah memiliki akun Anda bisa{" "}
                            <Link to={"/login"} className="text-primary font-semibold">
                                Masuk di sini!
                            </Link>
                        </p>
                    </div>
                    <form className="flex flex-col gap-10" onSubmit={handleRegister}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <div className="flex flex-col justify-center">
                                <UserRound className="absolute text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    className="border-b-2 border-b-[#999999] focus:border-b-[#000842] pl-10 py-2 w-full focus:outline-none focus:ring-0 focus:ring-none transition-all ease-in-out duration-300"
                                    placeholder="Masukkan email anda"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
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
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="website">Nama Website</label>
                            <div className="flex flex-col justify-center">
                                <Globe className="absolute text-gray-400" />
                                <input
                                    type="text"
                                    id="website"
                                    className="border-b-2 border-b-[#999999] focus:border-b-[#000842] pl-10 py-2 w-full focus:outline-none focus:ring-0 focus:ring-none transition-all ease-in-out duration-300"
                                    placeholder="Masukkan nama website anda (tanpa .com atau .id)"
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <div className="flex flex-col justify-center">
                                <LockKeyhole className="absolute text-gray-400" />
                                <input
                                    type="password"
                                    id="password"
                                    className="border-b-2 border-b-[#999999] pl-10 py-2 w-full focus:outline-none focus:ring-0 focus:ring-none focus:border-b-[#000842] transition-all ease-in-out duration-300"
                                    placeholder="Masukkan password anda"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Konfirmasi Password</label>
                            <div className="flex flex-col justify-center">
                                <LockKeyhole className="absolute text-gray-400" />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="border-b-2 border-b-[#999999] pl-10 py-2 w-full focus:outline-none focus:ring-0 focus:ring-none focus:border-b-[#000842] transition-all ease-in-out duration-300"
                                    placeholder="Konfirmasi password anda"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="rounded-full bg-primary py-5 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? "Mendaftar..." : "Daftar"}
                        </button>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;
