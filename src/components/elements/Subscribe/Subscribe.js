import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Subscribe.module.scss";
import { Button } from "../../elements";

export default () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const [email, setEmail] = useState("");

  const templateParams = {
    email: email,
    request: "Subscription",
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setStatus("Formato de mail incorrecto");
      return;
    }

    setSending(true);
    emailjs
      .send("SERVICE ID", "TEMPLATE ID", templateParams, "USER ID")
      .then(
        (response) => {
          setSending(false);
          setStatus("Su mensaje ha sido enviado!");
        },
        (err) => {
          setSending(false);
          setStatus("A ocurrido un error al enviar su mensaje: " + err.text);
        }
      );
    setEmail("");
  };

  return (
    <form className={styles.subscribe}>
      <span className={styles.status}>{sending ? "Sending... " : status}</span>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Your email address"
      />
      <Button click={onSubmit} hoverType="solid-color-tb" before="&#xf105;" />
    </form>
  );
};
