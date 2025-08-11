import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "0 auto",
          gap: "10px",
        }}
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          style={{ padding: "10px", border: "1px solid #ccc" }}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          style={{ padding: "10px", border: "1px solid #ccc" }}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          style={{ padding: "10px", border: "1px solid #ccc", height: "100px" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>

      {submitted && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
          Message sent successfully!
        </p>
      )}
    </div>
  );
};

export default Contact;