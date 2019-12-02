import shortid from 'shortid';
const NewsSources = [
  {
    Name: 'Tut.by',
    key: shortid.generate(),
    src: 'https://news.tut.by/rss/all.rss',
    informationPositionsInItem: {
      title: 'title',
      image: 'none', //image and description are at the same placement: 'description'
      description: 'description',
      isDescriptionWithImage: true,
      published: 'published',
      categories: 'none', // [{name:'name'},{name:'name'}] but it's empty
      id: 'id',
      contentlink: 'id',
    },
    infoHandler: item => {
      const img = item.description.match(/src="[^"]+/g)[0].replace('src="', '');

      const description = item.description.replace(/<[^>]+>/g, '');
      const categories = undefined;
      return {
        title: item.title,
        img: img,
        description: description,
        published: item.published,
        categories: categories,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
  {
    Name: 'New York Times',
    key: shortid.generate(),
    src: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    informationPositionsInItem: {
      title: 'title',
      image: 'none',
      description: 'description',
      isDescriptionWithImage: false,
      published: 'published',
      categories: 'categories', // [{name:'name'},{name:'name'}]
      id: 'id',
      contentlink: 'id',
    },
    infoHandler: item => {
      const img = undefined;
      const description = item.description;
      const categories = item.categories.map(category => {
        return category.name;
      });
      return {
        title: item.title,
        img: img,
        description: description,
        published: item.published,
        categories: categories,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
  {
    Name: 'Buzzfeed',
    key: shortid.generate(),
    src: 'https://www.buzzfeed.com/world.xml',
    informationPositionsInItem: {
      title: 'title',
      image: 'none', //image and description are at the same placement: 'description'
      description: 'description',
      isDescriptionWithImage: true,
      published: 'published',
      categories: 'none', // [{name:'name'},{name:'name'}] but it's empty
      id: 'id',
      contentlink: 'id',
    },
    infoHandler: item => {
      const img = item.description.match(/src="[^"]+/g)[0].replace('src="', '');
      const description = item.description
        .replace(/<[^>]+>/g, '')
        .replace('View Entire Post &rsaquo;', '');
      const categories = undefined;
      return {
        title: item.title,
        img: img,
        description: description,
        published: item.published,
        categories: categories,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
  {
    Name: 'NASA news',
    key: shortid.generate(),
    src: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
    informationPositionsInItem: {
      title: 'title',
      image: 'none', //no images at all
      description: 'description',
      isDescriptionWithImage: false,
      published: 'published',
      categories: 'none', // [{name:'name'},{name:'name'}] but it's empty
      id: 'id',
      contentlink: 'id',
    },
    infoHandler: item => {
      const img = item.enclosures[0].url;
      const description = item.description;
      const categories = undefined;
      return {
        title: item.title,
        img: img,
        description: description,
        published: item.published,
        categories: categories,
        id: item.id,
        contentlink: item.id,
      };
    },
  },
];
export default NewsSources;
