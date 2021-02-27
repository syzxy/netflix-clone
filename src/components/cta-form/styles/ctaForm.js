import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 550px) {
    padding: 0;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1rem;
  color: white;
  font-weight: 400;
  margin: 0 auto;
  padding: 0 10%;

  @media (min-width: 949px) {
    padding: 0 5%;
    max-width: none;
    font-size: 1.125rem;
    padding-bottom: 20px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 90%;
  max-width: 600px;
  height: 3rem;
  font-size: 1rem;
  padding: 0 0.5em;
  border-radius: 3px;
  border: none;
  outline: none;
  margin: 0.5rem auto;

  @media (min-width: 950px) {
    margin-right: 0;
    width: 50%;
    height: 3.5rem;
    font-size: 1.1rem;
    border-radius: 3px 0 0 3px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  color: white;
  height: 2.5rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  margin: 0.5rem auto;
  border-radius: 3px;
  background-color: rgba(220, 9, 20);
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #f40612;
  }

  @media (min-width: 950px) {
    margin-left: 0;
    height: 3.5rem;
    font-size: 1.4rem;
    border-radius: 0 3px 3px 0;
  }
`;
