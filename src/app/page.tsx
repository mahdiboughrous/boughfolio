"use client";
import { useRouter } from "next/navigation";
import {
  Banner,
  Bio,
  BottomBar,
  CallToAction,
  Canva,
  Flex,
  Name,
  Profile,
  Social,
  SocialItem,
  Speaker,
  Translation,
} from "./Page.styles";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledDiv1 = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;
const StyledEmailCopy = styled.div`
  color: green;
  position: absolute;
  width: 100%;
  padding: 10px;
  text-align: center;
  margin: 10px;
  background-color: #d9f7d6;
  border: 1px solid green;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
    max-width: 100px;

  }

  @media (max-width: 480px) {
    font-size: 10px;
    max-width: 100px;
  }
`;
const StyledImage = styled(Image)`
width: 75px;
height: 75px;
@media (min-width: 768px) {
  width: 80px;
  height: 80px;
}
@media (min-width: 1024px) {
  width: 85px;
  height: 85px;
}
 
`;
export default function Home() {
  const router = useRouter();
  const emailToCopy = process.env.NEXT_PUBLIC_EMAIL as string;
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailToCopy);
    setIsEmailCopied(true);
  };
  useEffect(() => {
    if (isEmailCopied) {
      setTimeout(() => {
        setIsEmailCopied(false);
      }, 3000);
    }
  }, [isEmailCopied]);

  const playAudio = () => {
    const audio = new Audio("/audio/mahdiboughrous.mp3");
    audio.play();
  }

  useEffect(() => {
    console.log("process.env.EMAIL", process.env.EMAIL_ACCESS_KEY);
  }, []);

  return (
    <Canva>
      {isEmailCopied && <StyledEmailCopy>Email copied to clipboard</StyledEmailCopy>}
      <Flex>
        <StyledDiv1>
          <StyledImage
            src={"/logo.svg"}
            alt="Mahdi Boughrous logo"
            style={{ paddingTop: "0px" }}
            width={90}
            height={90}
          />

          <Banner>
            <Name onClick={playAudio}>
              Mahdi <br /> Boughrous
              <Speaker icon="fluent:speaker-2-16-filled" width={"40"} />
            </Name>
            <Profile>Software Engineer</Profile>
          </Banner>
        </StyledDiv1>
        <Translation>
          {/* 
          <div>FR</div>
          <div>EN</div>
          */}
        </Translation>
      </Flex>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/mahdiboughrous.png"
          alt="Mahdi Boughrous profile picture"
          width={220}
          height={200}
        />
        <Bio>
          I specialize in developing visually stunning, AI-powered web applications with a focus on speed, efficiency, and innovation. Let&apos;s collaborate to create impactful and reliable solutions that exceed expectations.
        </Bio>
        <span style={{ margin: "9px" }}></span>
        <CallToAction onClick={() => router.push("/contact")}>
          Contact
        </CallToAction>
      </div>
      <Social>
        <SocialItem onClick={() => router.push(process.env.NEXT_PUBLIC_LINKEDIN as string)} icon="simple-icons:linkedin" width="40" />
        <SocialItem onClick={() => router.push(process.env.NEXT_PUBLIC_GITHUB_URL as string)} icon="simple-icons:github" width="40" />
        {/* <SocialItem onClick={() => router.push(process.env.NEXT_PUBLIC_X_URL as string)} icon="simple-icons:x" width="40" /> */}
        <SocialItem
          onClick={() => handleCopyEmail()}
          icon="ic:baseline-email"
          width="40"
        />
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
