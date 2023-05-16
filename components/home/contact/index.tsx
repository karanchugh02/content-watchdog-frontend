import { Axios } from 'axios';

import React, { useState } from 'react';

const index = () => {
          
        
      
        const submit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
          event.preventDefault();
          alert('Your response has been submitted');
      
          
        };

  //   const handle(e){
  //     const newdata={...data}
  //     newdata[e.target.id]=e.target.value
  //     setData(newdata)
  //     console.log(newdata)
  //   }
  interface MyEvent extends React.ChangeEvent<HTMLInputElement> {
    // Add any additional custom event properties if needed
  }
  
  return (
    <>
      <style>
        {`

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, div
pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q,
s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
figure, header, nav, section, article, aside, footer, figcaption, button {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

.html, body {
  font-family: 'Open Sans', sans-serif;
  background-color: #1b1c1b;
}

section {
  margin-top: 50px;
  margin-bottom: 50px;
}

section.contact-us #contact {
  position: relative;
  display: block;
  width: 380px;
  height: auto;
  background-color: #fff;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}

section.contact-us .section-heading {
  position: relative; 
  display: block;
  margin: auto;
}

.section-heading h4 {
  line-height: 40px;
  font-size: 28px;
  font-weight: 900;
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
}

input, textarea {
  width: 300px;
  position: relative;
  display: block;
  background-color: #f4f7fb;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  outline-color: #9e9e9e;
}

input {
  height: 40px;
  padding: 0px 15px;
}

textarea {
  min-height: 140px;
  max-height: 180px;
  padding: 15px;
  resize: none;
}

.contact-us span {
  height: 20px;
	font-size: 12px;
  margin-bottom: 20px;
}

.valid_info_name, .valid_info_email, .valid_info_message{
  display: inline-block;
  font-size: 13px;
  margin: 5px 2px;
}

.valid {
  border: 2px solid green;
  outline-color: green;
}

.invalid {
  border: 2px solid red;
  outline-color: red;
}

.btn {
  display: inline-flex;
  width: 100%;
  justify-content: flex-end;
}

#form-submit {
  position: relative;
  display: inline-block;
  float: right;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  background: rgb(219,138,222);
  background: black ;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s;
  transition: all .3s;
}

#form-submit:disabled {
  border: 1px solid #9e9e9e;
  background: transparent;
  color: #9e9e9e;
  transition: none;
  transform: none;
  cursor: default;
}



button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

`}
      </style>
      <section className="contact-us" id="contact-section">
        <form id="contact" action="" method="post" onSubmit={submit}>
          <div className="section-heading">
            <h4>Contact us</h4>
          </div>

          <div className="inputField">
            <input
              type="text"
              name="name"
              id="Name"
              placeholder="Your Name"
              autoComplete="on"
              required
              
            />
            <span className="valid_info_name"></span>
          </div>

          <div className="inputField">
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Your Email"
              required
              
            />
            <span className="valid_info_email"></span>
          </div>

          <div className="inputField">
            <textarea
              name="message"
              id="Message"
              placeholder="Message"
              
            ></textarea>
            <span className="valid_info_message"></span>
          </div>

          <div className="inputField btn">
            <button
              type="submit"
              id="form-submit"
              className="main-gradient-button"
            >
              Send a message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default index;
