import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { AccordionContainer } from "../containers/AccordionContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Header, CtaForm } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer bg="home-bg.jpg" dim>
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
