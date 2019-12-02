export const addCounter = payload => {
  return {
    type: 'ADDCOUNTER',
  };
};
export const setNews = payload => {
  return {
    type: 'SETNEWS',
    payload: payload,
  };
};
