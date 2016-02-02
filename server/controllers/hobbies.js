import Hobbie from '../models/Hobbie';

export const getHobbies = (req, res) => {
  Hobbie.find({}, (err, result) => {
    if(!err) {
      res.status(200).send(result);
    }
  });
};

export const createHobbie = (req, res) => {
  const h = new Hobbie();
  h.name = req.body.name;
  h.save((err, result) => {
    if(!err) {
      res.status(201).send(result);
    }
  });
};

export const updateHobbie = (req, res) => {
  const _id = req.body._id;
  const name = req.body.name;
  Hobbie.findById(_id, (err, hobbie) => {
    if (!err) {
      hobbie.name = name;
      hobbie.save((err2) => {
        if (!err2) {
          res.status(202).send(hobbie);
        }
      });
    }
  });
};

export const deleteHobbie = (req, res) => {
  const _id = req.body._id;
  Hobbie.findById({ _id }).remove((err) => {
    if(!err) {
      res.status(204).send();
    }
  });
};
