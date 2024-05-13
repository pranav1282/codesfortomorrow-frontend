"use client";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4001/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    });

    if (response.ok) {
      toast.success("Account created successfully");
    } else {
      const data = await response.json();
      toast.error(data.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-5 border-2 border-gray-800 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Create an account
        </h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
            className="mb-4 p-2 border-2 border-gray-300 rounded-md w-full"
          />

          <label className="block mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="mb-4 p-2 border-2 border-gray-300 rounded-md w-full"
          />

          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 p-2 border-2 border-gray-300 rounded-md w-full"
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
            Create Account
          </button>
        </form>
        <div className="mt-2 text-blue-500 font-medium">
          <Link href="/">Go back to main page</Link>
        </div>
      </div>
    </div>
  );
}
