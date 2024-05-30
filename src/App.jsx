import React, { useState } from "react";
import "./styles.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <div className="message">Thank you for your submission!</div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name" className="label">
                    Name:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email" className="label">
                    Email:
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="message" className="label">
                    Message:
                  </label>
                </td>
                <td>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="textarea"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="button">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
