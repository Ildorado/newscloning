import * as rssParser from 'react-native-rss-parser';
export const fetchApi = (src: string) => fetch(src);
export const fetchToText = (input: {[key: string]: any}) =>
  Promise.resolve(input.text());
export const textToRss = (text: string) =>
  Promise.resolve(rssParser.parse(text));
