import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { AccordionContainer } from "../containers/AccordionContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Header, CtaForm } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

const Home = () => {
  return (
    <>
      <HeaderContainer bg="home-bg.jpg" dim>
        <Header.Head>
          <Header.Logo src={logo} alt="netflix logo" to={ROUTES.HOME} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
        </Header.Head>
        <Header.Body>
          <Header.Heading>Unlimited movies, TV shows and more.</Header.Heading>
          <Header.SubHeading>
            Watch anywhere. Cancel at any time.
          </Header.SubHeading>
          <CtaForm>
            <CtaForm.Title>
              Ready to watch Netflix? Enter your email to create or restart your
              membership.
            </CtaForm.Title>
            <CtaForm.Form>
              <CtaForm.Input placeholder="Email address" />
              <CtaForm.Btn>Get started</CtaForm.Btn>
            </CtaForm.Form>
          </CtaForm>
        </Header.Body>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
