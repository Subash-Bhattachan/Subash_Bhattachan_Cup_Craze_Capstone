import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Let's Talk!</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13423.785158859338!2d-71.22085091570825!3d42.48731144784722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39e3839224bdb%3A0x4804e9e18f70bcf6!2sBurlington%20Mall!5e1!3m2!1sen!2sus!4v1734301037420!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xbljvlkp"
            method="POST"
            className="contact-inputs">
            <input type="text"
              placeholder="Enter username"
              name="username"
              required
              autoComplete="off"
              
            />

            <input type="email"
              placeholder="Enter email"
              autoComplete="off"
              required
              
            />

            <textarea name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              autoComplete="off"
              required
            >
            </textarea>

            <input type="submit"
              value="Send" />
          </form>
        </div>
      </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`

    padding: 2.5rem 0 5rem 0;
    text-align: center;

    .common-heading {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 25rem;
        margin: auto;
      
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            max-width: 100px;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact


