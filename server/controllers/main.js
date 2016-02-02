import request from 'request';
import async from 'async';

import { connectToCacheDatabase } from '../databases/cacheDatabase';
const cache = connectToCacheDatabase();

export const getPetById = (req, res) => {
  cache.get(req.params._id, (error, pet) => {
    if(error) {
      throw error;
    }
    if(pet) {
      console.log('From Redis cache.');
      res.send(pet);
    } else {
      request({ uri: `http://localhost:3000/api/pet/${req.params._id}`, json: true }, (error2, response, body) => {
        if(error2) {
          throw error2;
        }
        if(!error2 && response.statusCode === 200) {
          console.log('From Mongo database.');
          res.send(body);
          cache.setex(req.params._id, 10, JSON.stringify(body), (error3) => {
            if(error3) {
              throw error3;
            }
          });
        } else {
          res.status(response.statusCode);
        }
      });
    }
  });
};

export const getHobbyById = (req, res) => {
  cache.get(req.params._id, (error, hobby) => {
    if(error) {
      throw error;
    }
    if(hobby) {
      console.log('From Redis cache.');
      res.status(200).send(hobby);
    } else {
      request({ uri: `http://localhost:4000/api/hobby/${req.params._id}`, json: true }, (error2, response, body) => {
        if(error2) {
          throw error2;
        }
        if(!error2 && response.statusCode === 200) {
          console.log('From Mongo database.');
          res.send(body);
          cache.setex(req.params._id, 10, JSON.stringify(body), (error3) => {
            if(error3) {
              throw error3;
            }
          });
        } else {
          res.status(response.statusCode);
        }
      });
    }
  });
};

export const getAllData = (req, res) => {
  async.parallel({
    hobbies: (callback) => {
      request({ uri: 'http://localhost:4000/api/hobbies', json: true }, (error, response, body) => {
        if(error) {
          return callback({ service: 'hobbies', error });
        }
        if(!error && response.statusCode === 200) {
          return callback(null, body);
        }
        return callback(response.statusCode);
      });
    },
    pets: (callback) => {
      request({ uri: 'http://localhost:3000/api/pets', json: true }, (error, response, body) => {
        if(error) {
          return callback({ service: 'pets', error });
        }
        if(!error && response.statusCode === 200) {
          return callback(null, body);
        }
        return callback(response.statusCode);
      });
    }
  },
  (error, results) => {
    res.json({ error, results });
  });
};
