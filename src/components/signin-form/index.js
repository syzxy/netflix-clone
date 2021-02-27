import {
  Container,
  Base,
  Title,
  Error,
  Form,
  Input,
  Submit,
  Text,
  TextSmall,
  Link,
} from "./styles/signInForm";

const SignInForm = ({ children }) => {
  return <Container>{children}</Container>;
};

SignInForm.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

SignInForm.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

SignInForm.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

SignInForm.Form = ({ children, ...restProps }) => {
  return <Form {...restProps}>{children}</Form>;
};

SignInForm.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

SignInForm.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

SignInForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

SignInForm.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SignInForm.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default SignInForm;
