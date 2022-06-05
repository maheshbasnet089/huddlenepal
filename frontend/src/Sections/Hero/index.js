import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: gray;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container1 = styled.div`
  border: 1px solid red;
  margin-top: -9rem;
  text-align: center;
  padding: 2rem 3rem;
`;
const RedText = styled.span`
  font-size: 70px;
  letter-spacing: 3px;
  line-height: 70px;
  color: var(--red);
  font-family: "Sacramento", cursive;
`;
const Text = styled.h1`
  font-weight: 800;
  font-size: 80px;
  color: var(--white);
  line-height: 96px;
  word-spacing: 0px;
  text-transform: uppercase;
`;
const SubText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: var(--white);
`;
const Container2 = styled.form`
  border: 1px solid blue;
  margin-top: 2rem;
  width: 1110px;
  height: 65px;

  input {
    height: 60px;
    padding: 0 20px;
    line-height: 50px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Container1>
        <RedText>Discover</RedText>
        <Text>Your Best Event</Text>
        <SubText>
          Huddle Nepal, a great place to promote for huddles, events, meetings
          and bootcamps for free.
        </SubText>
      </Container1>
      <Container2>
        <input type="text" placeholder="What are you looking for ?" />
      </Container2>
    </Container>
  );
};

export default Hero;
