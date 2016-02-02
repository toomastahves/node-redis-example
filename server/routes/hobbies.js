import { getHobbies, createHobbie, updateHobbie, deleteHobbie } from '../controllers/hobbies';

const routes = (app) => {
  app.route('/api/hobbies')
    .get(getHobbies)
    .post(createHobbie)
    .put(updateHobbie)
    .delete(deleteHobbie);
};

export default routes;
