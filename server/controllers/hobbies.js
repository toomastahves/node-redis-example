import Hobby from '../models/Hobby';

export const getHobbies = (req, res) => {
  Hobby.find({}, (err, result) => {
    if(!err) {
      res.status(200).send(result);
    }
  });
};

export const getHobbyById = (req, res) => {
  const _id = req.params._id;
  Hobby.findById(_id, (err, hobby) => {
    if (!err) {
      res.status(200).send(hobby);
    }
  });
};

export const createHobby = (req, res) => {
  const h = new Hobby();
  h.name = req.body.name;
  h.save((err, result) => {
    if(!err) {
      res.status(201).send(result);
    }
  });
};

export const updateHobby = (req, res) => {
  const _id = req.body._id;
  const name = req.body.name;
  Hobby.findById(_id, (err, hobby) => {
    if (!err) {
      hobby.name = name;
      hobby.save((err2) => {
        if (!err2) {
          res.status(202).send(hobby);
        }
      });
    }
  });
};

export const deleteHobby = (req, res) => {
  const _id = req.body._id;
  Hobby.findById({ _id }).remove((err) => {
    if(!err) {
      res.status(204).send();
    }
  });
};
