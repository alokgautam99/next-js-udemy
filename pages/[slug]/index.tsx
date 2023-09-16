import styled from "@emotion/styled";
import bgImage from "../../assets/images/rose-bg.jpeg";
import { mediaQuery } from "@/styledConstants";
import Head from "next/head";

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
  ${mediaQuery.uptoMobile} {
    gap: 20px;
  }
`;

const Message = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  ${mediaQuery.uptoMobile} {
    font-size: 30px;
  }
`;

interface HomeProps {
  data: string;
}

const DynamicPage = ({ data }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Hello Alok</title>
        <meta name="description" content={`${data}-dynamic-meta-name`} />
      </Head>
      <Container
        style={{
          backgroundImage: `url(${bgImage.src})`,
          width: "100%",
          height: "100vh",
        }}
      >
        <Message>Hello Alok,</Message>
        <Wrapper>
          <Message>Good Morning</Message>
          <Message>You're looking beautiful today</Message>
        </Wrapper>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  return {
    props: {
      data: slug,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { slug: "a" } }, { params: { slug: "b" } }];

  return {
    paths,
    fallback: "blocking",
  };
}

export default DynamicPage;
