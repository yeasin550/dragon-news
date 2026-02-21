import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
    const { loginUser, setUser } = use(AuthContext);
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("i am work", email, password)
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log("user login success",user)
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="md:w-4/12 mx-auto border px-8 py-12 rounded-md bg-white">
            <h1 className="text-center text-2xl font-bold">Login your account</h1>
            <form onSubmit={handleLogin} className="space-y-2">
                <div>
                    <p className="text-md font-bold">Email</p>
                    <input className="border pl-1 border-gray-400 w-full h-9 rounded-sm" type="text" name="email" id="" required placeholder="Type your email"/>
               </div>
               <div>
                    <p className="text-md font-bold">Password</p>
                    <input className="border pl-1 border-gray-400 w-full h-9 rounded-sm" type="number" name="password" id="" required placeholder="Type your password"/>
                </div>
                <button
                    type="submit"
                    className="mt-3 py-2 px-3 rounded-sm bg-black text-white font-bold text-md w-full"
                >
                    Login
                </button>

            </form>
            <p>
                Don not Have An Account ? <Link className="text-sky-700 underline font-semibold" to="/auth/register">Register</Link>
                </p>
        </div>
    );
};

export default Login;