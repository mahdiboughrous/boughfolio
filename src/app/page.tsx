"use client";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

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
  justify-content:space-between;
  @media (min-width: 768px) {
    background-image: url("/images/tablet-background.webp");
  }
  @media (min-width: 1024px) {
    background-image: url("/images/desktop-background.webp");
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: 700;
  font-color: #ffffff;

  font-color: #ffffec;
  align-items: center;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 8rem;
  }
`;
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
`;

const Profile = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #7D7D7D;
  @media (min-width: 768px) {
  font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
  font-size: 1.4rem;
  }
`;

const Speaker = styled(Icon)`
  position: relative;
  top: 1.5rem;
  left: 0.5rem;
  color: #f17e13;
  @media (min-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media (min-width: 1024px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;

const Translation = styled.div`
  font-size: 1rem;
  font-weight: 700;
  font-color: #ffffff;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Social = styled.div`
  display: inline;
  width: auto;
  justify-content: space-around;
`;
const Bio = styled.div`
  max-width: 750px;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const CallToAction = styled.div`
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
interface Props {
  $initialColor?: string;
  $finalColor?: string;
}

const SocialItem = styled(Icon)<Props>`
  margin: 0 0.6rem;
  color: ${(props) => props.$initialColor || "#000"}; /* Initial color */
  cursor: pointer;
  transition: fill 0.3s ease; /* Smooth transition effect */

  &:hover {
    color: ${(props) => props.$finalColor || "#0A66C2"}; /* Color on hover */

  }
`;
export default function Home() {
  const router = useRouter();
  return (
    <Canva>
      <Flex>
        <Banner>
          <Name>
            Mahdi <br /> Boughrous
            <Speaker icon="fluent:speaker-2-16-filled" width={'40'} />
          </Name>
          <Profile>Software developer</Profile>
        </Banner>
        <Translation>
          <div>FR</div>
          <div>EN</div>
        </Translation>
      </Flex>
      <Bio>
        I specialize in creating stunning web apps and fast turnaround.
        Let&apos;s work together for efficient and reliable results.
      </Bio>
      <CallToAction onClick={()=>router.push("/contact")} >Contact</CallToAction>
      <Social>
        <SocialItem  icon="simple-icons:linkedin" width="40"/>
        <SocialItem icon="simple-icons:github"  width="40"/>
        <SocialItem  icon="simple-icons:x"  width="40"/>
        <SocialItem  icon="ic:baseline-email"  width="40"/>
      </Social>
      {/* 
      <BottomBar>
        <div>Skills</div>
        <div>Work</div>
        <div>Blog</div>
        <div>Store</div>
      </BottomBar>
      */}
    </Canva>
  );
}
