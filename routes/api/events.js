const express = require("express");
const router = express.Router();
const Event = require('../../models/Event')

router.get("/search", (req, res) => {
    Event
      .find({
        $text: {
          $search: `${req.query.search}`
        }
      })
      .populate("venue")
      .populate("artists")
      .then(foundEvents => {
        console.log(foundEvents)
      //.catch(error => console.log(error));

        if (foundEvents.length > 0) {
          res.json(foundEvents);
        } else {
          res.json([{error: "NO SEARCH RESULTS"}])
        }
      })
  });

module.exports = router;
