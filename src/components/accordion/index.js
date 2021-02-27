import {
  Container,
  Inner,
  Title,
  List,
  ListItem,
  Question,
  Answer,
  CtaForm,
} from "./styles/accordion";

const Accordion = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = ({ children }) => {
  return <Title>{children}</Title>;
};

Accordion.List = ({ children }) => {
  return <List>{children}</List>;
};

Accordion.ListItem = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Accordion.Question = ({ children, ...restProps }) => {
  return <Question {...restProps}>{children}</Question>;
};

Accordion.Answer = ({ children, ...restProps }) => {
  return (
    <Answer {...restProps}>
      <span>{children}</span>
    </Answer>
  );
};

export default Accordion;
