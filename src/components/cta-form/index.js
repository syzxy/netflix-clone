import { Container, Form, Input, Btn, Title } from "./styles/ctaForm";
import { MdChevronRight } from "react-icons/md";

const CtaForm = ({ children }) => {
  return <Container>{children}</Container>;
};

CtaForm.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

CtaForm.Form = ({ children }) => {
  return <Form>{children}</Form>;
};

CtaForm.Input = ({ ...props }) => {
  return <Input {...props} />;
};

CtaForm.Btn = ({ children, ...restProps }) => {
  return (
    <Btn {...restProps}>
      {children}
      <MdChevronRight />
    </Btn>
  );
};

export default CtaForm;
