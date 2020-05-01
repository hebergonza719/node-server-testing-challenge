const router = require('express').Router();

const Avengers = require('./avengers-model.js')

router.get("/", (req, res) => {
  Avengers.getAll()
    .then(avengers => {
      res.status(200).json(avengers);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  const newAvenger = req.body;
  Avengers.insert(newAvenger)
    .then(avenger => {
      res.status(201).json(avenger);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't contact db"});
    });
});

router.delete('/', (req, res) => {
  const unwantedAvenger = req.body;
  Avengers.remove(unwantedAvenger)
    .then(avenger => {
      res.status(200).json({ message: "Not part of the Avengers"});
    })
    .catch(err => {
      res.status(500).json({ message: "error contacting db"});
    });
});

module.exports = router;