function Signup() {
  return (
    <div className="page">
      <h1>Join EcoLife 🌱</h1>

      <form className="form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Signup;