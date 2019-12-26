import shortid from 'shortid';
import {NewsSourcesItemProps} from '../typescript/index';
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const localDateOptions = {
  timeZone: timeZone,
  hour: '2-digit',
  minute: '2-digit',
};
const NewsSources = [
  {
    Name: 'Tut.by',
    key: shortid.generate(),
    src: 'https://news.tut.by/rss/all.rss',
    infoHandler: (item: NewsSourcesItemProps) => {
      let img;
      if (item.enclosures && item.enclosures[0] && item.enclosures[0].url) {
        img = item.enclosures[0].url;
      } else {
        img = undefined;
      }
      const description = item.description.replace(/<[^>]+>/g, '');
      const published = new Date(item.published).toLocaleDateString(
        undefined,
        localDateOptions,
      );
      return {
        title: item.title,
        img: img,
        description: description,
        published: published,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
  {
    Name: 'New York Times',
    key: shortid.generate(),
    src: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    infoHandler: (item: NewsSourcesItemProps) => {
      const img = undefined;
      const description = item.description;
      const published = new Date(item.published).toLocaleDateString(
        undefined,
        localDateOptions,
      );
      return {
        title: item.title,
        img: img,
        description: description,
        published: published,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
  {
    Name: 'Buzzfeed',
    key: shortid.generate(),
    src: 'https://www.buzzfeed.com/world.xml',
    infoHandler: (item: NewsSourcesItemProps) => {
      let match = item.description.match(/src="[^"]+/g);
      let img;
      const published = new Date(item.published).toLocaleDateString(
        undefined,
        localDateOptions,
      );
      if (match) {
        img = match ? match[0].replace('src="', '') : undefined;
      }

      const description = item.description
        .replace(/<[^>]+>/g, '')
        .replace('View Entire Post &rsaquo;', '');
      return {
        title: item.title,
        img: img,
        description: description,
        published: published,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
  {
    Name: 'NASA news',
    key: shortid.generate(),
    src: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
    infoHandler: (item: NewsSourcesItemProps) => {
      const img = item.enclosures[0].url ? item.enclosures[0].url : undefined;
      const description = item.description;
      const published = new Date(item.published).toLocaleDateString(
        undefined,
        localDateOptions,
      );
      return {
        title: item.title,
        img: img,
        description: description,
        published: published,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
];
export default NewsSources;
