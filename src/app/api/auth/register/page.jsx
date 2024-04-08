"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <>
 
     
     
      {/* <HeaderPages title={"register"} /> */}
      <header className="flex flex-col items-center justify-between p-10">
      <HeaderPages title={"register"} />
      </header>

      <section className="container mx-auto flex justify-center items-center">

      <form onSubmit={onSubmit} className="bg-slate-500 p-5 flex flex-col md:w-2/4 lg:w-1/4 text-black rounded-md mt-10 border border-white  hover:border-blue-200">
        {/* <h1 className="text-2xl text-left mb-5 font-bold">Register</h1> */}

        <label htmlFor="username" className="text-black pl-2 mb-2">
          Username:
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          autoFocus
          className="text-sm border border-green-800 p-3 mb-2 w-full rounded-md text-white bg-slate-700"
          placeholder="yourUserName"
        />

        {errors.username && (
          <span className="text-red-900 ml-3">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="text-black pl-2 mt-2 mb-2">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="text-sm border border-green-800 p-3 mb-2 w-full rounded-md text-white bg-slate-700"
          placeholder="yourEmail@example.net"
        />
        {errors.email && (
          <span className="text-red-900 ml-3">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-black pl-2 mb-2 mt-2">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="text-sm border border-green-800 p-3 mb-2 w-full rounded-md text-white bg-slate-700"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-900 ml-3">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-black pl-2 mt-2 mb-2"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
          className="text-sm border border-green-800 p-3 mb-2 w-full rounded-md text-white bg-slate-700"
          placeholder="********"
        />
        {errors.confirmPassword && (
          <span className="text-red-900 ml-3">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="w-full text-white p-3 rounded-lg mt-2  border border-blue-300 text-white bg-blue-700 hover:bg-blue-800 hover:text-text-blue-300 hover:border-white py-2 px-4 hover:font-bold rounded-md ">
          Register
        </button>
      </form>
      
      </section>
 
    </>
  );
}
export default RegisterPage;