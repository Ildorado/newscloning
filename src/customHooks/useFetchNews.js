import {fetchNews, setNews} from '../redux/actions/index';
// import {useDispatch} from 'react-redux';
import {
  SetFocusedDrawerButton,
  setFocusedTabTitle,
} from '../redux/actions/index';
import {useDispatch} from 'react-redux';
import InitialScreenName from '../constants/InitialScreenName';
const useFetchNews = config => {
  const dispatch = useDispatch();
  return async function() {
    if (!Array.isArray(config)) {
      const news = await fetchNews(config, dispatch);
      dispatch(setNews(news));
      dispatch(SetFocusedDrawerButton(config.Name));
      dispatch(setFocusedTabTitle(InitialScreenName));
    } else {
      let news = [];
      let dates = [];
      config.forEach(function(el) {
        const newsSource = fetchNews(el, dispatch);
        news.push(newsSource);
      });
      Promise.all(news).then(values => {
        const res = values.flat();
        res.sort((a, b) => {
          return Date.parse(b.published) - Date.parse(a.published);
        });
        res.forEach(el => {
          dates.push(el.published);
        });
        dispatch(setNews(res));
        dispatch(SetFocusedDrawerButton('All'));
        dispatch(setFocusedTabTitle(InitialScreenName));
      });
    }
  };
};
export default useFetchNews;
