import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

import Spinner from "react-bootstrap/Spinner";
import { EmailCall } from "../../api/api";

import Toast from "../toast";

const Contact = () => {
 
  const [lodingSpin, setLodingSpin] = useState(false);
  const [name,setName] = useState('')
  const [message,setMessage] = useState('')
  const [email,setEmail] = useState('')
  const [err,seterr] = useState({})
  const [ress,setress] = useState({})

  let  validatefields = async (e)=>{
    let error = {}
    e.preventDefault()
    if(name?.length < 3 ){
      error['name'] = 'Required'
    }
    let re = /^\w+([a-z0-9]+@[a-z]+\.[a-z]{2,3})+$/;
    if(email?.length < 3 || !re.test(email)){
      error['email'] = 'Enter Proper Email'
    }
    if(message?.length < 5){
      error['message'] = 'Message shold be minimun 5 character'
    }
    if(Object.entries(error).length > 0){ 
      seterr(error)
    }else{
      setLodingSpin(true)
      let params = {name,email,message}
      let data = await EmailCall(params)
      setLodingSpin(false)
      setress(data)
      setTimeout(()=>{setress({})},3000)
    }
  }

  const clearFieldError =(field)=>{
    delete err[field]
    // seterr(err)
  }

  return (
    <>
    {ress &&  <Toast message={ress?.message} type={ress?.status} autoClose={3000} /> }
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon" />
              <h4>Email</h4>
              <h6>shahadat@hussain.co.in</h6>
              <a
                href="mailto:shahadathussain757@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact_option-icon" />
              <h4>Messenger</h4>
              <h6>Shahadat Hussain</h6>
              <a
                href="https://m.me/shahadat.hussain.5602"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RiWhatsappLine className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h6>+91 8709860231</h6>
              <a
                href="https://api.whatsapp.com/send?phone=918709860231"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              onChange={(e)=>{ clearFieldError('name')
                setName(e.target.value)
                }}
              
            />{
              err['name']  ? <p style={{color: 'red'}}>{err['name'] }</p> :''
            }
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={(e)=>{setEmail(e.target.value)
                clearFieldError('email')}}
              
            />
            {
              err['email'] ? <p style={{color: 'red'}}>{err['email']}</p> :''
            }
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              onChange={(e)=>{setMessage(e.target.value)
                clearFieldError('message')}}
              
            ></textarea>
            {
              err['message']  ? <p style={{color: 'red'}}>{err['message'] }</p> :''
            }
            {lodingSpin ? (
              <button type="submit" className="btn btn-primary">
                Loading...
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary"  onClick={validatefields}>
                Send Message
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
