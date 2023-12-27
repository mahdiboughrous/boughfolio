"use client"
import { useRouter } from "next/navigation";
import styled from "styled-components";

const GoBack = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  background: linear-gradient(to right, #ffe606, #f17e13);
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  color: #000;
  cursor: pointer;
  width: 100px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 2rem;
    width: 200px;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    width: 200px;
  }
`;
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
export default function Thanks() {
    const router = useRouter();
    return (
        <Canva>
        <h1>Thanks for your message!</h1>
        <p>I will get back to you as soon as I can.</p>
        <GoBack onClick={()=>router.replace("/")}>go back</GoBack>
        </Canva>
    );
}