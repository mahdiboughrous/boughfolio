"use client"
import styled from "styled-components"
import { Icon } from '@iconify/react';

const Canva = styled.main`
  background-image: url("/images/mobile-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    background-image: url("/images/tablet-background.webp");
  }
  @media (min-width: 1024px) {
    background-image: url("/images/desktop-background.webp");
  }
`

const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: 700;
  font-color: #ffffff;

  font-color: #FFFFEC;
  align-items: center;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 8rem;
  }
`
const Name = styled.div`
  font-size: 4rem;
  font-weight: 900;
  font-color: #ffffff;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`

const Profile = styled.div`
 font-size: 2rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`

const Speaker = styled.div`
  width: 2rem;
  height: 2rem;
  color :#FFB000;
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
  @media (min-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
`
const Banner = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`

const Translation = styled.div`
  font-size: 1rem;
  font-weight: 700;
  font-color: #ffffff;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Social = styled.div`
  display: flex;
  justify-content: space-around;
`
const Bio = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const CallToAction = styled.div`
  font-size: 1rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`


export default function Home() {
  return (
    <Canva>
      <Flex>
      <Banner>
      <Name>Mahdi <br/> Boughrous</Name>
      <Speaker>
        <Icon icon="fluent:speaker-2-16-filled" />
      </Speaker>
      <Profile>Software developer</Profile>
      </Banner>
      <Translation>EN</Translation>
      </Flex>
      <Bio>
      I specialize in creating stunning web apps and fast turnaround. 
Let's work together for efficient and reliable results.
      </Bio>
      <CallToAction>
        Contact
      </CallToAction>
      <Social>
        <div>Twitter</div>
        <div>Linkedin</div>
        <div>Github</div>
        <div>Instagram</div>
      </Social>
      <BottomBar>
        <div>Skills</div>
        <div>Work</div>
        <div>Blog</div>
        <div>Store</div>
      </BottomBar>
    </Canva>
  )
}
