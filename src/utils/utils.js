
export const formatDuration = (duration) => {

  const hours = Math.floor(duration / 60);
  const minutes = duration - (hours * 60);
  return hours !== 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;

}
export const refactoringData = (dataList) => {
  return dataList.map((data) => {
    return {
      ...data,
      movieId: data.id,
      image: data.image ? 'https://api.nomoreparties.co' + data.image.url : '',
      thumbnail: data.image ? 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url : '',
      trailer: data.trailerLink,
    };
  });

}

export const findMoviesByKeyword = (allDataList, keyword, onlyShort) => {
  const shortDuration = onlyShort ? 40 : 0;

  if (!allDataList)
    return [];

  if (keyword === '') {
    return allDataList.filter((data) =>
      !onlyShort || data.duration <= shortDuration ? true : false ? true : false);
  }

  return allDataList.filter((data) =>
    data.nameRU.toLowerCase().includes(keyword.toLowerCase())
      & (!onlyShort || data.duration <= shortDuration ? true : false) ? true : false
  );
}

