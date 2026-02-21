import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProviders";


const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser } = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.pic.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log("i am work", name, photo, email, password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
                navigate('/auth/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="md:w-4/12 mx-auto border px-8 py-12 rounded-md bg-white">
            <h1 className="text-center text-2xl font-bold">Register your account</h1>
            <form onSubmit={handleRegister} className="space-y-2">
                <div>
                    <p className="text-md font-bold">Name</p>
                    <input className="border pl-1 border-gray-400 w-full h-9 rounded-sm" type="text" name="name" id="" required placeholder="Type your name" />
                </div>
                <div>
                    <p className="text-md font-bold">Photo Url</p>
                    <input className="border pl-1 border-gray-400 w-full h-9 rounded-sm" type="text" name="pic" id="" required placeholder="Type your photo url" />
                </div>
                <div>
                    <p className="text-md font-bold">Email</p>
                    <input className="border pl-1 border-gray-400 w-full h-9 rounded-sm" type="text" name="email" id="" required placeholder="Type your email" />
                </div>
                <div>
                    <p className="text-md font-bold">Password</p>
                    <input className="border pl-1 border-gray-400 w-full h-9 rounded-sm" type="number" name="password" id="" required placeholder="Type your password" />
                </div>
                <button
                    type="submit"
                    className="mt-3 py-2 px-3 rounded-sm bg-black text-white font-bold text-md w-full"
                >
                    Register
                </button>

            </form>
            <p>
                Don not Have An Account ? <Link className="text-sky-700 underline font-semibold" to="/auth/Login">Login</Link>
            </p>
        </div>
    );
};

export default Register;