"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4001/user/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        newPassword,
      }),
    });

    if (response.ok) {
      toast.success("Password reset sucessfully");
    } else {
      toast.error("Error sending password reset link");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-5 border-2 border-gray-800 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Forgot Password</h2>
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

          <label className="block mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="mb-4 p-2 border-2 border-gray-300 rounded-md w-full"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-2 text-blue-500 font-medium">
          <Link href="/signin">Go back sign in page</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
