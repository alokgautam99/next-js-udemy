import styled from "@emotion/styled";
import bgImage from "../assets/images/rose-bg.jpeg";
import { mediaQuery } from "@/styledConstants";

const Container = styled.div`
  background-image: url("../assets/images/rose-bg.jpeg");
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${mediaQuery.uptoMobile}{
    gap: 20px;
  }
`;

const Message = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  ${mediaQuery.uptoMobile}{
    font-size: 30px;
  }
`;

export default function Home() {
  return (
    <Container
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <Message>Hello Abha,</Message>
      <Wrapper>
        <Message>Good Morning</Message>
        <Message>You're looking beautiful today</Message>
      </Wrapper>
    </Container>
  );
}
