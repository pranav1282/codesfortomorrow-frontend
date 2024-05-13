"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4001/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    });

    if (response.ok) {
      toast.success("Signed in successfully");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handleForgotPassword = async () => {
    // const response = await fetch("http://localhost:4001/user/forgotPassword", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     newPassword: password
    //   }),
    // });

    // if (response.ok) {
    //   toast.success("Password reset link sent to email");
    // } else {
    //   toast.error("Error sending password reset link");
    // }
    <Link href="/forgotPassword">Sign Up</Link>;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-5 border-2 border-gray-800 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 p-2 border-2 border-gray-300 rounded-md w-full"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 p-2 border-2 border-gray-300 rounded-md w-full"
          />

          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md"
          >
            Sign In
          </button>
        </form>
        <div className="mt-2 text-blue-500 font-medium">
          <span className="text-black"> Don't have an account? </span>
          <Link href="/signup">Sign Up</Link>
        </div>
        <div className="mt-2 text-blue-500 font-medium">
          <Link href="/forgotPassword">Forgot Password</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
