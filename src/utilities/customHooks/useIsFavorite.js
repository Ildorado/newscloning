import {useSelector} from 'react-redux';
import {getFavorites} from '../selectors';

// TODO: rename
const useIsFavorite = config => {
  const favorites = useSelector(getFavorites);

  return Boolean(favorites[config.id]);
};
export default useIsFavorite;
