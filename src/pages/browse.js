import { useDBContent } from "../hooks";
import contentFilter from "../utilities/contentFilter";

const Browse = () => {
  const { films } = useDBContent("films");
  const { series } = useDBContent("series");
  const slides = contentFilter({ series, films });

  return <div>This is the browse page</div>;
};

export default Browse;
