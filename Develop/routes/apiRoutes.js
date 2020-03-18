const router = require("express").Router();
const workOut = require("../models/workOut.js");

router.post("/api/workOut", ({ body }, res) => {
    workOut.create(body)
      .then(dbWorkOut => {
        res.json(dbWorkOut);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workOut/bulk", ({ body }, res) => {
    workOut.insertMany(body)
      .then(dbWorkOut => {
        res.json(dbWorkOut);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workOut", (req, res) => {
    workOut.find({})
      .sort({ date: -1 })
      .then(dbWorkOut => {
        res.json(dbWorkOut);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;
  