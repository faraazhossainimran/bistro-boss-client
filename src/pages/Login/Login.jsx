import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const [disabled, setDisabled] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      Swal.fire({
        title: "Logged in",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    })
    .catch(error => {
      console.log(error);
    })
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidatedCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if(validateCaptcha(user_captcha_value) == true){
      // alert('capcha Matched')
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }

  };
  return (
    <>
          <Helmet>
        <title>Bistro Boss | Log in</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
              </div>
              <div className="form-control">
                <input
                onBlur={handleValidatedCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                  value="login"
                ></input>
                {/* <button >Login</button> */}
              </div>
            </form>
            <p><small>New here?<Link to={'/signup'}>Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
