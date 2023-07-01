import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../store/data/data.slice";
import RegisterBtn from "./UI/RegisterBtn";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    sections: { contactUs },
  } = useSelector((state) => state.data.data);

  const dispatch = useDispatch();

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    dispatch(sendData(data));

    toggleIsOpen();
  };

  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <h3 className="section-title text-center ">{contactUs.title}</h3>
        <div className="contacts__content">
          <div className={["contacts__info", isOpen ? "active" : ""].join(" ")}>
            <h4 className="contacts__company">{contactUs.company}</h4>
            <h5 className="contacts__address">{contactUs.address}</h5>
            <h5 className="contacts__link">
              <a href={`tel:${contactUs.phone}`}>T:{contactUs.phone}</a>
            </h5>
            <h5 className="contacts__link">
              <a href={`mailto:${contactUs.email}`}>{contactUs.email}</a>
            </h5>
            <RegisterBtn onClick={toggleIsOpen}>Send us a message</RegisterBtn>
          </div>
          <form onSubmit={submitForm} className={["contacts__form", isOpen ? "active" : ""].join(" ")}>
            {contactUs.inputs.map((input) =>
              input.tag === "input" ? (
                <input type={input.type} placeholder={input.placeholder} required={input.required} key={input.name} name={input.name} />
              ) : (
                <textarea placeholder={input.placeholder} name={input.name} rows={5} key={input.name} />
              )
            )}
            <div className="contacts__btns">
              <button className="btn btn-red">Send</button>
              <span className="btn btn-cancel" onClick={toggleIsOpen}>
                Cancel
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
