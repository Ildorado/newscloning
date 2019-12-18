import {useSelector} from 'react-redux';
import {getFavorites} from '../selectors';

const useIsFavorite = config => {
  const favorites = useSelector(getFavorites);

  return Boolean(favorites[config.id]);
};
export default useIsFavorite;
