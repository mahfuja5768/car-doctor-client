import { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");

  const { login, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    // console.log(email, password);

    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = { email };
        setError("");
        form.reset();
      })

      .catch((error) => {
        console.error("error", error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully logged in");
        return navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid  md:grid-cols-2 gap-5 py-1 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label  flex items-center mt-5">
                <span> New to car doctor?</span>
                <Link
                  to="/signup"
                  className="text-green-600 underline label-text-alt text-xl link link-hover"
                >
                  Register now
                </Link>
              </label>
            </div>
            <p className="text-red-600 mt-3 mb-3">{error}</p>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-secondary mx-8"
          >
            <FaGoogle></FaGoogle> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
