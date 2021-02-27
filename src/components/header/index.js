import {
  Container,
  Inner,
  Logo,
  ButtonLink,
  Body,
  Heading,
  SubHeading,
} from "./styles/header";
import { Link } from "react-router-dom";

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Inner = ({ children }) => {
  return <Inner>{children}</Inner>;
};

Header.Logo = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <Logo {...props} />
    </Link>
  );
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Heading = ({ children }) => {
  return <Heading>{children}</Heading>;
};

Header.SubHeading = ({ children }) => {
  return <SubHeading>{children}</SubHeading>;
};

Header.Body = ({ children }) => {
  return <Body>{children}</Body>;
};

export default Header;
