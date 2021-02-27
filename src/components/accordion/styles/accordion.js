import styled from "styled-components/macro";

export const Container = styled.div`
  /* text-align: center; */
  width: 100%;
  padding: 50px 0;
  border-bottom: 8px solid #222;

  @media (min-width: 550px) {
    padding: 70px 45px;
  }
`;

export const Inner = styled.div`
  color: white;
  font-weight: 400;
  font-size: 1.125rem;

  @media (min-width: 550px) {
    font-size: 1.25rem;
  }

  @media (min-width: 950px) {
    font-size: 1.625rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.625rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (min-width: 550px) {
    font-size: 2.5rem;
  }

  @media (min-width: 950px) {
    font-size: 3.125rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  max-width: 815px;
  margin: 1.25em auto;

  @media (min-width: 550px) {
    width: 90%;
    margin: 1.5em auto;
  }

  @media (min-width: 950px) {
    width: 75%;
    margin: 2em auto;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Question = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  text-align: left;
  background: #303030;
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  border: 0;
  padding: 0.8em 1em;
  margin-bottom: 1px;
  outline: none;

  & > svg {
    font-size: 1.2em;
  }
`;

export const Answer = styled.div`
  max-height: ${({ show }) => (show ? "1200px" : 0)};
  overflow: hidden;
  text-align: left;
  white-space: break-spaces;
  background: #303030;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

  & span {
    display: inline-block;
    padding: 1.2em;
  }
`;

export const CtaForm = styled.form``;
