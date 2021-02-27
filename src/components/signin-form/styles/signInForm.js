import styled from "styled-components/macro";
import { Link as reactRDLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding: 20px 5% 60px;
  min-height: 550px;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;

  @media (min-width: 740px) {
    background-color: transparent;
    margin-bottom: 90px;
    min-height: 660px;
  }
`;

export const Base = styled.div`
  color: white;
  width: 100%;

  @media (min-width: 740px) {
    background-color: rgba(0, 0, 0, 0.75);
    max-width: 450px;
    padding: 60px 68px 40px;
  }
`;

export const Error = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  padding: 10px 20px;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #e87c03;
  font-size: 14px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 1rem;
  border: 0;
  outline: none;
  border-radius: 4px;
  padding: 16px 20px 0;
  background-color: #333;
  color: white;
`;

export const Submit = styled.button`
  width: 100%;
  max-width: 100%;
  border: 0;
  outline: none;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  margin: 24px 0 12px;
  padding: 16px;
  background-color: #e50914;
  color: white;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: #f40612;
  }
`;

export const Text = styled.div`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
`;

export const Link = styled(reactRDLink)`
  text-decoration: none;
  color: white;
`;

export const TextSmall = styled.div`
  color: #8c8c8c;
  margin-top: 11px;
  font-size: 13px;
`;
