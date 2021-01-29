import React, { useState } from "react";
import axios from "axios";
import {
  Main,
  Form,
  Label,
  Input,
  Textarea,
  Button,
} from "./ContactForm.styled";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xpzonapk",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Main>
      <div>
        <h1>Contact</h1>
        <p>Interested in doing a project togheter?</p>
      </div>

      <Form onSubmit={handleOnSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </Button>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </Form>
    </Main>
  );
};

export default ContactForm;
