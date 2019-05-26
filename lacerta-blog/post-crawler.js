const fs = require('fs');
const path = require('path');

const yamlFrontMatter = require('yaml-front-matter');

const postsFolders = [
  '_posts',
  'frontend-interview'
];

const pagesFolders = ['_pages'];

const generateFileList = (pathArray) => {
  const list = [];
  pathArray.map(p => {
    const absolutePath = path.resolve(__dirname, '../', p);
    try {
      const results = fs.readdirSync(absolutePath);
      results.forEach(subP => {
        list.push(...getAbsolutePathList(path.join(absolutePath, subP)));
      });
    } catch (e) {
      console.error(e);
    }
  });
  return list;
};

const getAbsolutePathList = p => {
  const resultList = [];
  try {
    if (fs.lstatSync(p).isDirectory()) {
      const files = fs.readdirSync(p);
      files.forEach(f => {
        const list = getAbsolutePathList(path.join(p, f));
        resultList.push(...list);
      });
    } else {
      resultList.push(p);
    }
  } catch (e) {
    console.error(e);
  }
  return resultList;
};

const getDocs = folders => {
  const fileList = generateFileList(folders);
  const docs = [];
  fileList.forEach(p => {
    try {
      const text = fs.readFileSync(p);
      const data = yamlFrontMatter.loadFront(text, {
        contentKeyName: 'markdown'
      });
      docs.push(data);
    } catch (e) {
      console.error(e);
    }
  });
  return docs;
};

const writeRecords = (name, data) => {
  try {
    fs.writeFileSync(path.resolve(__dirname, name), data);
  } catch (e) {
    console.log(e);
  }
};

const pages = getDocs(pagesFolders);
const posts = getDocs(postsFolders);
writeRecords('posts.json', JSON.stringify([...pages, ...posts], true, 2));

const postsList = require('./posts.json');
const availablePosts = postsList.filter(p => p.permalink)
  .sort((a, b) => {
    if (a.permalink === '/') return -1;
    if (b.permalink === '/') return 1;
    if (a.permalink.startsWith('/about')) return 1;
    if (b.permalink.startsWith('/about')) return -1;
    return a.permalink.localeCompare(b.permalink);
  });
const postRoutes = availablePosts.map(p => {
  let permalink = p.permalink;
  permalink = permalink.startsWith('/') ? permalink.substring(1) : permalink;
  permalink = permalink.endsWith('/') ? permalink.substr(0, permalink.length - 1) : permalink;
  return `{
    path: '${permalink}',
    component: PageComponent,
    pathMatch: 'full'
  }`;
});
// console.log(postRoutes);

const routeTemplate = fs.readFileSync('./app-routing.template').toString();
const routes = routeTemplate.replace('<route-template>', postRoutes.reduce(
  (accu, value) => accu.concat(value + ',\n')
, ''));
// console.log(routes);

fs.writeFileSync(path.resolve(__dirname, './src/app/app-routing.module.ts'), routes);