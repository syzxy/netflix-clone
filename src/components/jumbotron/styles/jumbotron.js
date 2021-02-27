import styled from 'styled-components/macro';

export const Item = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  overflow: hidden;
  color: white;
`;

export const Inner = styled.div`
  display: flex;
  /* flex-direction: ${ (props) => props.direction }; */
  flex-direction: ${ ({direction}) => direction };
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 949px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  
  @media (min-width: 550px) and (max-width: 949px) {
    font-size: 2.5rem;
  }

  @media (max-width: 549px) {
    font-size: 1.625rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
  line-height: normal;
  
  @media (min-width: 550px) and (max-width: 949px) {
    font-size: 1.25rem;
  }

  @media (max-width: 549px) {
    font-size: 1.125rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 0;
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 949px) {
    width: 100%;
    text-align: center;
  }
`;