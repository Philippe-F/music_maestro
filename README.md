# [Music Maestro](https://music-maestro.herokuapp.com/)

Music Maestro is a full-stack app that allows users to search for artists, venues and musical events. Our goal was to recreate some of the features of Ticketmaster, in particular, the search feature while improving the user experience.

## Technologies
* React
* Redux
* MongoDB
* Mongoose
* Express
* Node
* Amazon Web Services
* Heroku

## Features 
### Search

  MongoDB's text index was used for the basis of our search. Initially, converting the artists' and venues' properties to foreign key arrays left us unable to search them. To circumvent that challenge, we created a tags column which included the text version of the collections' information. In addition, we used ".populate()" to populate the foreign keys that were associated with the search results.

  ```javascript
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

          if (foundEvents.length > 0) {
            res.json(foundEvents);
          } else {
            res.json([{error: "NO SEARCH RESULTS"}])
          }
        })
    });
  ```

### Follows/Favorites

  1:M associations were used to store artist, venue and event ids on the user, which are then asychronously fetched from the database and served up to the frontend.

  ```javascript
    router.delete("/:user_id/events/:event_id/favorite", async (req, res) => {
      let user = await User.findById(req.params.user_id);
      user.favorites.events.remove(req.params.event_id);
      user = await user.save();
      res.json(user);
    });
  ```
  





