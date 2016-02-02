import { getPets, createPet, updatePet, deletePet } from '../controllers/pets';

const routes = (app) => {
  app.route('/api/pets')
    .get(getPets)
    .post(createPet)
    .put(updatePet)
    .delete(deletePet);
};

export default routes;
