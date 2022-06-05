import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faSearchengin,
  faGratipay,
} from "@fortawesome/free-brands-svg-icons";
const Container = styled.div`
  /* border: 1px solid red; */
`;
const SocialContainer = styled.div`
  /* border: 1px solid green; */
  height: 40px;
  width: 100vw;
  background-color: #11161f;
  line-height: 28.8px;
  display: flex;
`;
const Media = styled.div`
  /* padding: 15px; */
  display: flex;
  height: 36px;
  width: 648px;

  min-height: auto;
  min-width: auto;
  padding: 0 15px 0 15px;
  justify-content: space-around;
  align-items: center;
  text-align: left;

  /* background-color: red; */
  & {
    color: #959ca7;
  }
  p {
    font-weight: 500;
    color: #959ca7;
    /* height: 12px; */
    line-height: 12px;
    margin-left: -4rem !important;
    transition: all 0.35s ease 0s;
  }
  p:hover {
    color: var(--white);
    cursor: pointer;
  }
`;
const Auth = styled.div`
  /* border: 1px solid red; */
  width: 698px;
  text-align: right;
  /* justify-content : fle */
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span:nth-child(2) {
    color: red;
    /* border-radius: none; */
    color: #959ca7;
    margin-right: 0.5rem;
  }

  span,
  span:hover {
    /* display: inline-block; */
    cursor: pointer;
    width: 2rem;
    height: 1.7rem;
    /* margin: 0 auto; */
    color: #f9f9f9;
  }
  p {
    color: #959ca7;
    font-weight: 500;
    line-height: 28.8px;
    margin-right: 1rem;
    transition: all 0.35s ease 0s;
  }
  p:hover {
    color: white;
    cursor: pointer;
  }
`;
const NavContainer = styled.div`
  height: 101px;
  width: 100%;
  border-bottom: 2px solid white;
  background-color: gray;
  display: flex;
  align-items: center;
  line-height: 28.8px;

  img {
    display: inline;
    width: 240px;
    height: 75px;
    max-width: 100%;
    margin-left: 3rem;

    &:hover {
      cursor: pointer;
    }
    /* vertical-align: top; */
  }
`;

const Items = styled.ul`
  width: 720px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 7rem;

  a {
    color: white;
    /* border: 1px solid yellow; */
    font-weight: 600;
    font-family: Barlow, sans-serif;
    margin-left: -5rem;
    font-weight: 600;
    line-height: 1.5;
    color: white;
    &:hover {
      cursor: pointer;
    }
    &::after {
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      background-color: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      background-color: var(--red);
      width: 100%;
    }
  }
`;
const Button = styled.button`
  padding: 20px 26px 20px 26px;
  letter-spacing: 2px;
  font-weight: 700;
  line-height: 12px;
  min-width: auto;
  min-height: auto;
  background-color: #fc3c3c;
  transition: all 0s ease-in-out 0s;
  color: white;
  border-radius: 5px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:focus {
    transform: scale(0.9);
  }
`;
const HeaderNav = () => {
  return (
    <Container>
      <SocialContainer>
        <Media>
          <FontAwesomeIcon icon={faTwitter} />
          <p>Twitter</p>
          <FontAwesomeIcon icon={faFacebook} />
          <p>Facebook</p>
          <FontAwesomeIcon icon={faYoutube} />
          <p>Youtube</p>
          <FontAwesomeIcon icon={faInstagram} />
          <p>Instagram</p>
          {/* <i class="fa-brands fa-twitter"></i> */}
        </Media>
        <Auth>
          <span>
            <FontAwesomeIcon icon={faSearchengin} />
          </span>
          <span>
            <FontAwesomeIcon icon={faGratipay} />
          </span>
          <p>WishList</p>
          <p>SignIn Or Register</p>
        </Auth>
      </SocialContainer>
      <NavContainer>
        <img src={logo} alt="logo" />
        <Items>
          <a href="#home">Home</a>
          <a href="#howwework">How We Work</a>
          <a href="#eventlistings">Event Listings</a>
          <a href="#contact">Contact</a>
        </Items>

        <Button> + Add Events</Button>
      </NavContainer>
    </Container>
  );
};

export default HeaderNav;
