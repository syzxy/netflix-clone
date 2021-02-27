import { Container, Top, Bottom, Links, LinkItem, Link } from "./styles/footer";

const Footer = ({ children }) => {
  return <Container>{children}</Container>;
};

Footer.Top = ({ children }) => {
  return <Top>{children}</Top>;
};

Footer.Links = ({ children }) => {
  return <Links>{children}</Links>;
};

Footer.LinkItem = ({ children, ...restProps }) => {
  return (
    <LinkItem>
      <Link {...restProps}>{children}</Link>
    </LinkItem>
  );
};

Footer.Bottom = ({ children }) => {
  return <Bottom>{children}</Bottom>;
};

export default Footer;
