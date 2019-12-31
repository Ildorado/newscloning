import {NewsDataProps} from '../../typescript/index';
import {NewsSourcesProps} from '../../typescript/index';
export type NewsActionTypes =
  | FetchNewsBeginActionProps
  | FetchNewsSuccessActionProps
  | FetchNewsFailureActionProps
  | FetchNewsProcessBeginActionProps
  | FetchNewsProcessEndActionProps
  | SetNewsActionProps;

export const FETCHNEWSBEGIN = 'news/FETCHNEWSBEGIN';
export interface FetchNewsBeginActionProps {
  type: typeof FETCHNEWSBEGIN;
  id: string;
}
export const fetchNewsBegin = (id: string) => ({
  type: FETCHNEWSBEGIN,
  id: id,
});
export const FETCHNEWSSUCCESS = 'news/FETCHNEWSSUCCESS';
export interface FetchNewsSuccessActionProps {
  type: typeof FETCHNEWSSUCCESS;
  id: string;
}
export const fetchNewsSuccess = (id: string) => {
  return {
    type: FETCHNEWSSUCCESS,
    id: id,
  };
};
export const FETCHNEWSFAILURE = 'news/FETCHNEWSFAILURE';
export interface FetchNewsFailureActionProps {
  type: typeof FETCHNEWSFAILURE;
  id: string | null;
  payload: string | null;
}
export const fetchNewsFailure = (error: string | null, id: string | null) => ({
  type: FETCHNEWSFAILURE,
  payload: {error},
  id: id,
});

export const FETCHNEWSPROCESSBEGIN = 'news/FETCHNEWSPROCESSBEGIN';
export interface FetchNewsProcessBeginActionProps {
  type: typeof FETCHNEWSPROCESSBEGIN;
  payload: NewsSourcesProps | NewsSourcesProps[];
}
export function fetchNewsProcessBegin(
  payload: NewsSourcesProps | NewsSourcesProps[],
) {
  return {
    type: FETCHNEWSPROCESSBEGIN,
    payload: payload,
  };
}

export const FETCHNEWSPROCESSEND = 'news/FETCHNEWSPROCESSEND';
export interface FetchNewsProcessEndActionProps {
  type: typeof FETCHNEWSPROCESSEND;
}
export function fetchNewsProcessEnd() {
  return {
    type: FETCHNEWSPROCESSEND,
  };
}

export const SETNEWS = 'news/SETNEWS';
export interface SetNewsActionProps {
  type: typeof SETNEWS;
  payload: NewsDataProps[];
  currentNewsSource: string | null;
}
export function setNews(
  payload: NewsDataProps[],
  currentNewsSource: string | null,
) {
  return {
    type: SETNEWS,
    payload: payload,
    currentNewsSource: currentNewsSource,
  };
}
