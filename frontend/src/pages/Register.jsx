import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ firstname: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    try {
      const res = await axios.post("http://localhost:5000/register", {
        firstname: form.firstname,
        email: form.email,
        password: form.password
      });
      
      setMessage(res.data.message || "Registration successful!");
      setForm({ firstname: "", email: "", password: "" }); // Clear form
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={form.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength="6"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      
      {message && (
        <div className={`message ${message.includes("successful") ? "success" : "error"}`}>
          {message}
        </div>
      )}
    </div>
  );
}