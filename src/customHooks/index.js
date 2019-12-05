import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
const useFavorite = config => {
  const favorites = useSelector(state => state.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(config.id in favorites);
  }, [config, favorites]);
  return isFavorite;
};
export {useFavorite};
