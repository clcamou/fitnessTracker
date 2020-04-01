const router = require("express").Router();
const Excerise = require("../models/excerise.js");

router.post("/api/excerise", ({ body }, res) => {
    Excerise.create(body)
      .then(dbExcerise => {
        res.json(dbExcerise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/excerise/bulk", ({ body }, res) => {
    Excerise.insertMany(body)
      .then(dbExcerise => {
        res.json(dbExcerise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/excerise", (req, res) => {
    Excerise.find({})
      .sort({ date: -1 })
      .then(dbExcerise => {
        res.json(dbExcerise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;
  