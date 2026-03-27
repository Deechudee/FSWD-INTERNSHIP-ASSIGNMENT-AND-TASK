function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;