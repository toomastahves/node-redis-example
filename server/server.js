// import { startWebpackDevServer } from './webpack/devServer';

import petsApp from './express/petsApp';
petsApp.listen(3000, () => {
  console.log(`petsApp express started at 3000`);
});

import hobbiesApp from './express/hobbiesApp';
hobbiesApp.listen(4000, () => {
  console.log(`hobbiesApp express started at 4000`);
});

if(process.env.NODE_ENV !== 'production') {
  // startWebpackDevServer();
}
