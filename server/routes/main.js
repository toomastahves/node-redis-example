import { getAllData, getPetById, getHobbyById } from '../controllers/main';

const routes = (app) => {
  app.route('/api/main/all')
    .get(getAllData);
  app.route('/api/main/pet/:_id')
    .get(getPetById);
  app.route('/api/main/hobby/:_id')
    .get(getHobbyById);
};

export default routes;
