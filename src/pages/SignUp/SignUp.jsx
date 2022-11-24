import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();

  // Create user with email and password
  const onSubmit = (data, event) => {
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("User Created Successfully");
        const userDetails = {
          displayName: data.name,
        };
        updateUser(userDetails)
          .then(() => {
            savedUser(data.name, data.email, data.role);
            toast.success("Name Updated");
            event.target.reset();
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  // Saved new users email and name in db
  const savedUser = (name, email, role) => {
    const user = {
      name,
      email,
      role,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  // Sign in with Google
  const handlGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success(`SignUp Successful ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-12 bg-neutral rounded-md">
        <h2 className="text-xl text-white text-center uppercase pb-6 tracking-widest font-semibold">
          SignUp
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white mb-2 tracking-wider">
                Create which type of account?
              </span>
            </label>
            <select
              {...register("role", { required: true })}
              className="input input-bordered w-full max-w-xs"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <input
            className="btn btn-success w-full tracking-widest"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p className="text-white pt-4 text-center">
          Already Have An Account ?{" "}
          <Link className="text-accent font-semibold" to="/login">
            Signin
          </Link>
        </p>
        <div className="divider divide-accent text-white">OR</div>
        <button onClick={handlGoogleSignUp} className="btn btn-success w-full">
          SIGNUP WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
