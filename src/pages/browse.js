import { useDBContent } from "../hooks";
import contentFilter from "../utilities/contentFilter";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

const Browse = () => {
  const { films } = useDBContent("films");
  const { series } = useDBContent("series");
  const slides = contentFilter({ series, films });

  return (
    <HeaderContainer bg="joker1.jpg">
      <Header.Head>
        <Header.Logo to={ROUTES.HOME} />
      </Header.Head>
    </HeaderContainer>
  );
};

export default Browse;
