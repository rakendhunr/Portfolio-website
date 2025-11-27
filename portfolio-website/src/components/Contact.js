import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../App.css";
import "./Contact.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setError("");
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (!formData.name || !formData.email.includes("@") || !formData.message) {
      setError("Please fill all fields.");
      return;
    }
    try {
      emailjs.send(
        "service_pobrh17",
        "template_e68v1ii",
        formData,
        "J91tOCPtk3XJLt8tD"
      );

      setSubmitted(true);
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setformData({ name: "", email: "", message: "" });
    setError("");
    setSubmitted(true);
  };
  return (
    <Container id="contact" className="my-5">
      <div className="app-headings">Contact</div>
      <Form className="contactForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            controlId="formMessage"
            rows={3}
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button
          variant="outline-info"
          className="app-common-button"
          type="submit"
        >
          Send
        </Button>
      </Form>
      {submitted && (
        <Alert variant="success" className="mt-3">
          Thank you for contacting me! I will get back to you soon.
        </Alert>
      )}
    </Container>
  );
}

export default Contact;
