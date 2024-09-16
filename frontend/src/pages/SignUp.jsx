import { motion } from "framer-motion";
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();
  const handleSignUp = async (data) => {
    console.log(data);

    try {
      await signup(data);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white  ">
          Create Account
        </h2>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="flex flex-col gap-3"
        >
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="size-5 text-white" />
            </div>
            <input
              autoComplete="off"
              type="text"
              placeholder="name"
              {...register("name", { required: "this field is required" })}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
            />
          </div>
          {errors.name && (
            <p className="text-red-500  mt-[-2rem]">{errors.name.message}</p>
          )}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="size-5 text-white" />
            </div>
            <input
              type="text"
              placeholder="email"
              autoComplete="off"
              {...register("email", { required: "this field is required" })}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
            />
          </div>
          {errors.email && (
            <p className="text-red-500  mt-[-2rem]">{errors.email.message}</p>
          )}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="size-5 text-white" />
            </div>
            <input
              type="password"
              placeholder="password"
              {...register("password", {
                required: "this field is required",
                minLength: {
                  value: 6,
                  message: "password must be more than 6 charachters",
                },
              })}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
            />
          </div>
          {errors.password && (
            <p className="text-red-500  mt-[-2rem]">
              {errors.password.message}
            </p>
          )}
          {console.log(errors)}
          {error && (
            <p className="text-red-500 font-semibold mt-[-2rem]">{error}</p>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center rounded-b-2xl">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link className="text-blue-400 hover:underline" to={"/log-in"}>
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
