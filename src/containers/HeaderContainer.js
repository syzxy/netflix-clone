import { Header } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children, ...restProps }) {
  let background = restProps.bg && `/images/misc/${restProps.bg}`;

  return (
    <Header background={background} {...restProps}>
      <Header.Inner>
        <Header.Logo src={logo} alt="netflix logo" to={ROUTES.HOME} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Inner>
      {children}
    </Header>
  );
}
