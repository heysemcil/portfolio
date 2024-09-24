import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_565dcba", "template_v8f0xwj", form.current, {
        publicKey: "M0JXOVRYa207A9U8v",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="user_name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="user_email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
