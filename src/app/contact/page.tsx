"use client";
import styled from "styled-components";


const Canva = styled.main`
  background-image: url("/images/mobile-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  @media (min-width: 768px) {
    background-image: url("/images/tablet-background.webp");
  }
  @media (min-width: 1024px) {
    background-image: url("/images/desktop-background.webp");
  }
`;

const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 40px;
  max-width: 750px;
  }

  @media (min-width: 1024px) {
    padding: 60px;
  max-width: 750px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }

  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #2980b9;
  }
`;
export default function Contact() {
    const emailAccessKey = process.env.EMAIL_ACCESS_KEY;
    const baseUrl = process.env.BASE_URL ? `${process.env.BASE_URL}/thanks` : 'http://localhost:3000/thanks';

  return (
    <Canva>
      <StyledForm action="https://api.web3forms.com/submit" method="POST">

      <input type="hidden" name="access_key" value={emailAccessKey} />
      <input type="hidden" name="redirect" value={baseUrl}/>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <div className="h-captcha" data-captcha="true"></div>

      <button type="submit">Submit Form</button>
    </StyledForm>
    </Canva>
  );
}
