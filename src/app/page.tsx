"use client";
import { useRouter} from "next/navigation";
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


export default function Home() {
  const router = useRouter();
  const emailToCopy = process.env.EMAIL as string  ;
  const handleCopyEmail = () => {
      navigator.clipboard.writeText(emailToCopy);
  };
  
  return (
    <Canva>
      <Flex>
        <Banner>
          <Name>
            Mahdi <br /> Boughrous
            <Speaker icon="fluent:speaker-2-16-filled" width={"40"} />
          </Name>
          <Profile>Software developer</Profile>
        </Banner>
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
          gap: "35px",
        }}
      >
        <Bio>
          I specialize in creating stunning web apps and fast turnaround.
          Let&apos;s work together for efficient and reliable results.
        </Bio>
        <CallToAction onClick={() => router.push("/contact")}>
          Contact
        </CallToAction>
      </div>
      <Social>
            <SocialItem onClick={()=> router.push(process.env.LINKEDIN || '')} icon="simple-icons:linkedin" width="40" />
            <SocialItem onClick={()=> router.push(process.env.GITHUB_URL || '')} icon="simple-icons:github" width="40" />
            <SocialItem onClick={()=> router.push(process.env.X_URL || '')} icon="simple-icons:x" width="40" />
          <SocialItem
            onClick={()=>handleCopyEmail()}
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
