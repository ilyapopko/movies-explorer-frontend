
import { SHORT_DURATION, PARENT_URL } from './constants';

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
      image: data.image ? PARENT_URL + data.image.url : '',
      thumbnail: data.image ? PARENT_URL + data.image.formats.thumbnail.url : '',
      trailer: data.trailerLink,
    };
  });

}

export const findMoviesByKeyword = (allDataList, keyword, onlyShort) => {

  const minDuration = onlyShort ? SHORT_DURATION : 0;

  if (!allDataList) {
    return []};

  if (keyword === '' || keyword === null || keyword === undefined) {
    return allDataList.filter((data) =>
      !onlyShort || data.duration <= minDuration ? true : false);
  }

  return allDataList.filter((data) =>
    data.nameRU.toLowerCase().includes(keyword.toLowerCase())
      & (!onlyShort || data.duration <= minDuration ? true : false) ? true : false
  );
}

