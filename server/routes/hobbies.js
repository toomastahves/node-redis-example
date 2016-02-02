import { getHobbies, createHobby, updateHobby, deleteHobby, getHobbyById } from '../controllers/hobbies';

const routes = (app) => {
  app.route('/api/hobbies')
    .get(getHobbies)
    .post(createHobby)
    .put(updateHobby)
    .delete(deleteHobby);
  app.route('/api/hobby/:_id')
    .get(getHobbyById);
};

export default routes;
