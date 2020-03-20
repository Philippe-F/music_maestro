const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Event = require("../../models/Event")

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
})

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
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

  User.findOne({ handle: req.body.handle }).then(user => {
    if (user) {
      errors.handle = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.get("/events", (req, res) => {
  // get all events 
  Event.find()
  // pass in current user location when google maps api is finished 
  .limit(20) 
  .sort({ date: -1 })
  .then(events => res.json(events))
  .catch(err => res.status(400).json(err)) 
});

router.get("/users/user_id/my_favorites", (req, res) => {
  User.find({id: req.params.user_id}) 
  .then(user => res.json(user.favorites.events))
  .catch(err => res.status(400).json(err)) 
});

router.get("/users/user_id/my_artists", (req, res) => {
  User.find({id: req.params.user_id}) 
  .then(user => res.json(user.follows.artists))
  .catch(err => res.status(400).json(err)) 
});

router.get("/users/user_id/my_venues", (req, res) => {
  User.find({id: req.params.user_id}) 
  .then(user => res.json(user.follows.venues))
  .catch(err => res.status(400).json(err)) 
});

// router.post("/", singleMulterUpload("image"), async (req, res) => {
//   const userData = req.body;
//   userData.image = await singlePublicFileUpload(req.file);
//   const user = new User(userData);
//   await user.save();
//   res.json(user);
// });


module.exports = router; 