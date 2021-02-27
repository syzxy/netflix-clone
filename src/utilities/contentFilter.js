/**
 * Group the series and films into genres
 * @param {Object} param0 Collection of series and films, each is an Array of objects
 * @return {Object} The grouped series and films
 */
export default function contentFilter({ series, films }) {
  const getGenres = (collection) => {
    return Array.from(new Set(collection.map((doc) => doc.genre)));
  };

  const capitaliseGenreName = (genre) => {
    return genre
      .replaceAll("-", " ")
      .replace(/^\w|\s+\w/g, (match) => match.toUpperCase());
  };

  const getDocsByGenre = (collection, genre) => {
    return collection.filter((doc) => doc.genre === genre);
  };

  const classifyContent = (collection) => {
    const content = [];
    getGenres(collection).forEach((genre) => {
      content.push({
        title: capitaliseGenreName(genre),
        data: getDocsByGenre(collection, genre),
      });
    });
    return content;
  };

  return { series: classifyContent(series), films: classifyContent(films) };
}
