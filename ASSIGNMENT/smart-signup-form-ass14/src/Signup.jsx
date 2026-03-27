import { useState } from "react";
import "./App.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // ✅ Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name cannot be blank";
    }

    // ✅ Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email cannot be blank";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    // ✅ Password validation
    if (!form.password) {
      newErrors.password = "Password cannot be blank";
    } else if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(form.password)) {
        newErrors.password ="Password must contain 1 uppercase letter, 1 number & min 6 chars";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Account Created Successfully 🎉");
      setForm({ name: "", email: "", password: "",confirmPassword: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="signup-container">
      <div className="left">
        <h2>Explore Beautiful UI ✨</h2>
      </div>

      <div className="right">
        <div className="form-box">
          <h1>Create Account</h1>

          <form onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-box">{errors.name}</div>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-box">{errors.email}</div>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error-box">{errors.password}</div>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="error-box">{errors.confirmPassword}</div>}

            <button type="submit" className="submit-btn">
              Create Account
            </button>
          </form>

          {success && <div className="success-box">{success}</div>}
        </div>
      </div>
    </div>
  );
}

export default Signup;