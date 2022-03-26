import { useState } from "react";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("Thank you for your message, our team will get back to you soon.");
  };
  return (
    <section id="contact" className="contact">
      <h2 className="title-container">Get in touch</h2>
      <div className="contact__flex-container">
        <div className="contact__info-container">
          <div className="contact__info">
            <h1 className="contact__title">
              Bolder brands start with meaningful conversations
            </h1>
            <p className="contact__paragraph">
              Our team is ready to listen and look forward to understanding more
              about your brand and business objectives
            </p>
          </div>
        </div>
        <form onSubmit={(e) => submitHandler(e)} className="contact__form">
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input
            className="contact__input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            pattern="[A-Za-z\s]+"
            type="text"
            required
          />
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            className="contact__input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
            required
          />
          <label className="contact__label" htmlFor="telephone">
            Telephone
          </label>
          <input
            className="contact__input"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            id="telephone"
            type="number"
            maxLength={16}
            required
          />
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact__textarea"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            id="message"
            cols={60}
            rows={10}
            required
          ></textarea>
          <button className="contact__button">Get in touch</button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
