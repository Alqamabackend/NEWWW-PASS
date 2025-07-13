import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <>
      <nav className="bg-slate-800 text-white">
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
          <div className="logo font-bold">
            <span className="text-green-700">&lt;</span>
            <span>Pass</span>
            <span className="text-green-700">OP/&gt;</span>
          </div>
          <ul>
            <li className="flex gap-4">
              <Link className="hover:font-bold" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            autoComplete="new-password"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
