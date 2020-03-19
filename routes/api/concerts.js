const express = require("express");
const router = express.Router();
const concerts = require('../../models/Concert')

router.get("/search", (req, res) => {
  // search = req.query[0];
  //${req.query[0]} 
  console.log(req.query);
    concerts
      .find({
        $text: {
          $search: `${req.query.search}`
        }
      })
      .then(foundConcerts => {
        console.log(foundConcerts);

        if (foundConcerts.length > 0) {
          res.json(foundConcerts);
        } else {
          res.json({ error: ['Nothing matched your search criteria']})
        }
      })
  });

module.exports = router;
