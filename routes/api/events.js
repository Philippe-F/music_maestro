const express = require("express");
const router = express.Router();
const events = require('../../models/Event')

router.get("/search", (req, res) => {
    events
      .find({
        $text: {
          $search: `${req.query.search}`
        }
      })
      .then(foundEvents => {
        console.log(foundEvents);

        if (foundConcerts.length > 0) {
          res.json(foundEvents);
        } else {
          res.json([{error: "NO SEARCH RESULTS"}])
        }
      })
  });

module.exports = router;
