import { useState } from "react";
import "./App.css";

function App() {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setMessage(" Name cannot be empty");
    }
    else if (age < 18) {
      setMessage(" Age must be 18 or above");
    } 
    else {
      setMessage(" Registration Successful");
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;