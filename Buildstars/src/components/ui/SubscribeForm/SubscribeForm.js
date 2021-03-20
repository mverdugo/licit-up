import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./SubscribeForm.module.scss";
import { CardButton } from "../../ui";
import { Spinner } from "../../elements";
import {useCustomState} from "../../../state/state";

export default ({ style }) => {
  const state = useCustomState()[0];

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferedCheck, setPreferedCheck] = useState(false);
  //const [selectedFamily, setSelectedFamily] = useState({})

  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    email_prefered: preferedCheck ? "Yes" : "No",
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const setFamilyValue = () => {

  }

  const onSubmit = () => {
    if (name === "") {
      setStatus("Por favor, ingrese su nombre");
      setError(true);
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Formato de mail es incorrecto");
      setError(true);
      return;
    }

    if (phone === "") {
      setStatus("Por favor, ingrese un número de teléfono");
      setError(true);
      return;
    }

    setSending(true);
    emailjs
      .send(
        "SERVICE ID",
        "TEMPLATE ID",
        templateParams,
        "USER ID"
      )
      .then(
        (response) => {
          setSending(false);
          setError(false);
          setStatus("¡Su suscripción a sido completada!");
        },
        (err) => {
          setSending(false);
          setError(true);
          setStatus("Ups, ha ocurrido un error: " + err.text);
        }
      );
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setPreferedCheck(false);
  };

  const loading = sending && (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );

  return (
    <form style={style} className={styles.wrapper}>
      {loading}
      <CardButton
        click={onSubmit}
        btn_after="&#xf107;"
        btn_text="Confirmar Suscripción"
        btn_type="solid-color-tb"
        btn_hoverType="solid-gray-tb"
        btn_align="stretch"
        padding
      >
        <div className={styles.contact_form}>
          <span className={[styles.status, error && styles.error].join(" ")}>
            {status}
          </span>
          <h4>Formulario de Suscripción:</h4>
          <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nombre completo *"
          />
          <div>
            <p>Seleccione su tipo de documento</p>
            <select className={styles.select_family} onChange={setFamilyValue()}>
              {
                state.data.document_type.map((type) => (
                    <option value={type}>{type}</option>
                ))
              }
            </select>
          </div>
          <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Número de documento *"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Dirección de mail *"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Numero de teléfono *"
          />
          <div>
            <p>Rubro al que pertenece</p>
            <select className={styles.select_family} onChange={setFamilyValue()}>
              {
                state.data.family_filters.default.map((family) => (
                    <option value={family.id}>{family.name}</option>
                ))
              }
            </select>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
            placeholder="Palabras claves para filtrado de licitaciones"
          />
          <label className={styles.checkbox_group}>
            <p>Acepto Terminos y condiciones</p>
            <input
              onChange={() => setPreferedCheck(!preferedCheck)}
              type="checkbox"
              checked={preferedCheck}
            />
            <span className={styles.checkmark} />
          </label>
        </div>
      </CardButton>
    </form>
  );
};
