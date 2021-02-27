import {
  Container, Item, Inner, Title, SubTitle, Image, Pane,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction }) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.defaultProps = {
  direction: "row",
};

Jumbotron.Container = ({ children }) => {
  return <Container>{children}</Container>;
};

Jumbotron.Title = ({ children }) => {
  return <Title>{children}</Title>;
};

Jumbotron.SubTitle = ({ children }) => {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};

Jumbotron.Pane = ({ children }) => {
  return <Pane>{children}</Pane>;
};

export default Jumbotron;
