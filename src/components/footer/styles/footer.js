import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 70px 45px;
  padding-bottom: 30px;
  color: #757575;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 549px) {
    padding: 50px 5%;
  }
`;

export const Top = styled.p`
  margin-bottom: 30px;
`;

export const Links = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

export const LinkItem = styled.li`
  flex: 0 25%;
  min-width: 100px;
  padding-right: 12px;
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    flex-basis: 33%;
  }
  @media (max-width: 500px) {
    flex-basis: 50%;
  }
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline solid;
  }
`;

export const Bottom = styled.p`
  font-size: 13px;
  margin-top: 24px;
`;
