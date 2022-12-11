import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

const Flex1 = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 10px;
`;

const Logo = styled.div`
  width: 256px;
  height: 256px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 19px;
`;

const LogoImg = styled.img`
  width: 100%;
  border-radius: 19px;
  box-shadow: inset 0 -0.5px 0 #aaaaaa, inset 0px -1px 1px -1px #fff,
    0px 0.5px 0.75px 0px #999;
  &:hover {
    filter: contrast(120%);
  }
  &:active {
    transform: translateY(+13px);
    filter: brightness(90%);
  }
`;

const Title = styled.h1`
  height: 40px;
`;
const Description = styled.span`
  height: 21px;
`;

const Links = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

const Link = styled.a`
  align-items: center;
  appearance: button;
  background-color: #0276ff;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 -2px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 10px 21px;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  transition: color 0.13s ease-in-out, background 0.13s ease-in-out,
    opacity 0.13s ease-in-out, box-shadow 0.13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:active {
    background-color: #006ae8;
  }
  &:hover {
    background-color: #1c84ff;
  }
`;

const HEADER_TEXT = {
  true: {
    title: "KoEn",
    description: "Program to convert text to Korean or English",
  },
  false: {
    title: "ㅏㅐ뚜",
    description: "ㅖ갷ㄱ므 새 채ㅜㅍㄷㄱㅅ ㅅㄷㅌㅅ 새 ㅏㅐㄱㄷ무 ㅐㄱ뚜히ㅑ노",
  },
};

export default function Header() {
  const [isEngText, setText] = useState(true);
  const toggleText = () => {
    setText((prev) => !prev);
  };
  return (
    <Container>
      <Flex1>
        <Logo onClick={toggleText}>
          <LogoImg src="/img/logo.png" alt="logo"></LogoImg>
        </Logo>
        <Title>{HEADER_TEXT[isEngText].title}</Title>
        <Description>{HEADER_TEXT[isEngText].description}</Description>
        <Links>
          <Link href="https://github.com/c9u11/koen/releases">Download</Link>
          <Link href="https://github.com/c9u11/koen">Github</Link>
          <Link href="https://c9u11.github.io/koen/issue">Issue</Link>
        </Links>
      </Flex1>
    </Container>
  );
}
