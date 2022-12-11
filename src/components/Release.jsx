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
  padding: 50px 0px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Title = styled.h2`
  margin-top: 0px;
`;

const data = [
  {
    version: "pre-release",
    title: "pre-release open",
    description: `Global Shortcut 사용
Keyboard 제어 라이브러리 사용 (RobotJS)
Dragged Text 가져오기
영어를 한글로 변환
한글을 영어로 변환
Build 테스트
앱 종료 관련 버그 수정
    `,
  },
];

export default function Release() {
  return (
    <Container>
      {data.map((v) => {
        return (
          <Item>
            <span>{v.version}</span>
            <Title>{v.title}</Title>
            <pre>{v.description}</pre>
          </Item>
        );
      })}
    </Container>
  );
}
