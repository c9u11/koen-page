import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 10px;
  background-color: white;
  padding: 50px 0px;
`;
const Item = styled.div`
  display: flex;
  width: 100%;
  color: #222;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;
const Img = styled.img`
  width: 256px;
`;
const Video = styled.video`
  width: 256px;
`;
export default function Feature() {
  return (
    <Container>
      <Item>
        <Img src="img/apps.png"></Img>
        <h2>언제 어디서나 어떤 프로그램이든</h2>
        <p>단축키 하나로 편리하게 한글과 영어를 변환할 수 있습니다.</p>
      </Item>
      <Item>
        <Video loop autoPlay muted src="video/convertText.mov"></Video>
        <h2>원하는 텍스트만 변환</h2>
        <p>
          드래그된 텍스트를 인식하여 전체 또는 일부만 별도로 변환 가능합니다.
        </p>
      </Item>
    </Container>
  );
}
