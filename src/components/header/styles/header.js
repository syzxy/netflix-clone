import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 8px solid #222;
  background: ${(props) => {
    let bg = "";
    props.dim &&
      (bg += `linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0,
          rgba(0, 0, 0, 0) 60%, 
          rgba(0, 0, 0, 0.8) 100%),`);
    props.background &&
      (bg += `url(${props.background}) 50% 50% / cover no-repeat`);
    return bg || "none";
  }};
`;

export const Head = styled.div`
  max-width: 1920px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;

  @media (min-width: 550px) and (max-width: 949px) {
    margin: 0 45px;
  }

  @media (min-width: 950px) {
    margin: 0 3.5rem;
  }
`;

export const Logo = styled.img`
  padding-top: 0.5rem;
  fill: #e50914;
  line-height: normal;
  height: 32px;

  @media (min-width: 550px) and (max-width: 949px) {
    height: 32px;
    width: 108px;
  }

  @media (min-width: 950px) and (max-width: 1449px) {
    height: 36px;
    width: 134px;
  }

  @media (min-width: 1450px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(Link)`
  background-color: #e50914;
  min-width: 8ex;
  line-height: normal;
  font-weight: 400;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  font-size: 0.9rem;
  padding: 0.5rem;
  margin-top: 0.35rem;

  @media (min-width: 550px) {
    font-size: 1rem;
    margin-top: 0.5rem;
    padding: 7px 17px;
  }

  &:hover {
    background-color: #f40612;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 90px 5%;
  color: white;

  @media (min-width: 550px) {
    padding: 145px 45px;
  }
`;

export const Heading = styled.h1`
  font-size: 1.75rem;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 550px) {
    font-size: 3.125rem;
  }

  @media (min-width: 1449px) {
    font-size: 4rem;
    max-width: 800px;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.125rem;
  max-width: 640px;
  margin: 1rem auto;
  text-align: center;
  font-weight: 400;

  @media (min-width: 550px) {
    font-size: 1.625rem;
  }
  @media (min-width: 1449px) {
    max-width: 800px;
  }
`;
