import React,{ useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_rpzxjdh', 'template_uir2nif', form.current, 'ITb7FL6uKhUbnKYk-')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });

      e.target.reset();
    }

    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon" />
              <h4>Email</h4>
              <h6>shahadat@hussain.co.in</h6>
              <a href="mailto:shahadathussain757@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact_option-icon" />
              <h4>Messenger</h4>
              <h6>Shahadat Hussain</h6>
              <a href="https://m.me/hushahadat" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RiWhatsappLine className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h6>+91 8709860231</h6>
              <a href="https://api.whatsapp.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };

  export default Contact;