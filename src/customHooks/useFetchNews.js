import {fetchNews} from '../redux/actions/index';
// import {useDispatch} from 'react-redux';
import {
  SetFocusedDrawerButton,
  setFocusedTabTitle,
} from '../redux/actions/index';
import {useDispatch} from 'react-redux';
import InitialScreenName from '../constants/InitialScreenName';
const useFetchNews = config => {
  const dispatch = useDispatch();
  return function() {
    fetchNews(config, dispatch);
    dispatch(SetFocusedDrawerButton(config.Name));
    dispatch(setFocusedTabTitle(InitialScreenName));
  };
};
export default useFetchNews;
