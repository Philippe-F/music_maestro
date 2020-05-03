const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const Venue = require("../../models/Venue");
const Artist = require("../../models/Artist");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Event = require("../../models/Event");

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
    });
  }
);

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ handle: req.body.handle }).then((user) => {
    if (user) {
      errors.handle = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.get("/events", (req, res) => {
  // get all events
  Event.find()
    // populate the associations
    .populate("venue")
    .populate("artists")
    // pass in current user location when google maps api is finished
    .limit(20)
    .sort({ date: -1 })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json(err));
});

////////////////FETCHING DATA////////////////

router.get("/:user_id/my_favorites", async (req, res) => {
  // User.findById( req.params.user_id )
  // .populate("event")
  // .then(user => res.json(user.favorites.events))
  // .catch(err => res.status(400).json(err))

  const user = await User.findById(req.params.user_id)
    .populate({
      path: "favorites.events",
      populate: {
        path: "artists",
        model: "Artist",
      },
    })
    .populate({
      path: "favorites.events",
      populate: {
        path: "venue",
        model: "Venue",
      },
    });
  res.json(user.favorites.events);
});

router.get("/:user_id/my_artists", async (req, res) => {
  const user = await User.findById(req.params.user_id).populate(
    "follows.artists"
  );
  res.json(user.follows.artists);
});

router.get("/:user_id/my_venues", async (req, res) => {
  const user = await User.findById(req.params.user_id).populate(
    "follows.venues"
  );
  res.json(user.follows.venues);
});

router.get("/:user_id/events", async (req, res) => {
  const user = await User.findById(req.params.user_id);
  res.json(user.favorites.events);
});

///////////////FOLLOWS////////////////

router.post("/:user_id/artists/:artist_id/follow", async (req, res) => {
  const artist = await Artist.findById(req.params.artist_id);
  let user = await User.findById(req.params.user_id);
  user.follows.artists.push(artist._id);
  user = await user.save();
  res.json(user);
});

router.delete("/:user_id/artists/:artist_id/follow", async (req, res) => {
  let user = await User.findById(req.params.user_id);
  const index = user.follows.artists.indexOf(req.params.artist_id);
  delete user.follows.artists[index];
  user = await user.save();
  res.json(user);
});

router.post("/:user_id/venues/:venue_id/follow", async (req, res) => {
  const venue = await Venue.findById(req.params.venue_id);
  let user = await User.findById(req.params.user_id);
  user.follows.venues.push(venue._id);
  user = await user.save();
  res.json(user);

  // User.findOne({ _id: req.params.user_id })
  //   .then(user => {
  //     user.follows.venues.push(req.params.venue_id)
  //     return user.save()
  //       .then(user => res.json(user))
  //   })
});

router.delete("/:user_id/venues/:venue_id/follow", async (req, res) => {
  const venue = await Venue.findById(req.params.venue_id);
  let user = await User.findById(req.params.user_id);
  // db.users.update({ _id: user._id }, { $pull: { follows: { venue._id } } });
  user = await user.save();
  res.json(user);
});

///////////////FAVORITES//////////////

router.post("/:user_id/events/:event_id/favorite", async (req, res) => {
  const event = await Event.findById(req.params.event_id);
  let user = await User.findById(req.params.user_id);
  user.favorites.events.push(event._id);
  user = await user.save();

  user = await User.findById(req.params.user_id)
    .populate({
      path: "favorites.events",
      populate: {
        path: "artists",
        model: "Artist",
      },
    })
    .populate({
      path: "favorites.events",
      populate: {
        path: "venue",
        model: "Venue",
      },
    });

  res.json(user);
});

router.delete("/:user_id/events/:event_id/favorite", async (req, res) => {
  let user = await User.findById(req.params.user_id);
  user.favorites.events.remove(req.params.event_id);
  user = await user.save();

  user = await User.findById(req.params.user_id)
    .populate({
      path: "favorites.events",
      populate: {
        path: "artists",
        model: "Artist",
      },
    })
    .populate({
      path: "favorites.events",
      populate: {
        path: "venue",
        model: "Venue",
      },
    });

  res.json(user);
});

// router.delete("/:user_id/artists/:artist_id/follow", async (req, res) => {
//   let user = await User.findById(req.params.user_id);
//   user.follows.artists.remove(req.params.artist_id);
//   user = await user.save();
//   res.json(user);
// })

// res.send(user)

// res.send("hello")

// })

module.exports = router;
