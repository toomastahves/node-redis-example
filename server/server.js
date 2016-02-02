// import { startWebpackDevServer } from './webpack/devServer';

import petsApp from './express/petsApp';
petsApp.listen(3000, () => {
  console.log(`petsApp express started at 3000`);
});

import hobbiesApp from './express/hobbiesApp';
hobbiesApp.listen(4000, () => {
  console.log(`hobbiesApp express started at 4000`);
});

import mainApp from './express/mainApp';
mainApp.listen(5000, () => {
  console.log(`mainApp express started at 5000`);
});

if(process.env.NODE_ENV !== 'production') {
  // startWebpackDevServer();
}
