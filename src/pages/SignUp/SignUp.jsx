import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      Swal.fire({
        title: "Account created succussfully",
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

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign UP</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email" , { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  
                />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {required: true, minLength: 8, maxLength: 12, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/})}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && <span className="text-red-600">Email is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-600">Password must be 8 characters</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be less than 13 characters</span>}
                {errors.password?.type === "pattern" && <span className="text-red-600">Password must be one capital letter, one small letter and a number</span>}
                <label className="label">{/* <LoadCanvasTemplate /> */}</label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="login"
                ></input>
                {/* <button >Login</button> */}
              </div>
            </form>
            <p>
              <small>
                Already registerd?<Link to={"/login"}>login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
