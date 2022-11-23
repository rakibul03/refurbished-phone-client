import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        event.target.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-12 bg-neutral rounded-md">
        <h2 className="text-xl text-white text-center uppercase pb-6 tracking-widest font-semibold">
          login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Your Email Here"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            className="btn btn-success w-full tracking-widest"
            value="Signin"
            type="submit"
          />
        </form>
        <p className="text-white pt-4">
          New to Recycling ?{" "}
          <Link className="text-accent font-semibold" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider divide-accent text-white">OR</div>
        <button className="btn btn-success w-full">LOGIN WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
