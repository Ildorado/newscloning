import {useSelector} from 'react-redux';
import {getFavorites} from '../selectors';
import {NewsDataProps} from '../../typescript/index';
const useIsFavorite = (config: NewsDataProps) => {
  const favorites = useSelector(getFavorites);

  return Boolean(favorites[config.id]);
};
export default useIsFavorite;
