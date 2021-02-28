import { Header } from "../components";

export function HeaderContainer({ children, ...restProps }) {
  let background = restProps.bg && `/images/misc/${restProps.bg}`;

  return (
    <Header background={background} {...restProps}>
      {children}
    </Header>
  );
}
