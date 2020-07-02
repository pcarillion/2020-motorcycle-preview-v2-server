const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");
const protectRoute = require("../middlewares/protectRoute");
// const protectAdminRoute = require("../middlewares/protectAdminRoute");
const userModel = require("../models/User")

/* GET all-bikes */
router.get("/collection", (req, res, next) => {
  bikeModel
  .find()
  .then(bikes => {
    // console.log(bikes);
    res.status(200).send(bikes)
  })
  .catch(next)
})

// GET one bike 

router.get("/one-bike-:id", (req, res, next)=> {

  console.log(req.params.id)

  bikeModel
  .findById(req.params.id)
  .then(bike => 
    res.status(200).send(bike)
    )
  .catch(next)
  }
)

// GET myCollection (private route)

router.get("/my-collection", protectRoute, (req, res) => {
  if (req.session.currentUser){
    userModel
      .findById(req.session.currentUser._id)
      .populate("favorites")
      .then(user => {console.log(user, req.session.currentUser.favorites);
        res.render("mycollection", {bikes:user.favorites})})
      .catch(err => console.log(err))
  } else {
    res.redirect("/auth/signin");
  }
})

router.post("/add-to-favorite/:id", protectRoute, (req, res, next) => {
  if (req.session.currentUser){
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, {$push: {favorites: req.params.id}},{new:true})
    .then (user => {
          console.log(user, req.session.currentUser)
          res.redirect('/collection')}
    )
    .catch(err => {console.log(err)})
} else (res.redirect("/auth/signin"))
})

router.post("/remove-from-favorite/:id", protectRoute, (req, res, next) => {
  if (req.session.currentUser){
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, {$pull: {favorites: req.params.id}},{new:true})
    .then (user => {
          console.log(user, req.session.currentUser)
          res.redirect('/collection')}
    )
    .catch(err => {console.log(err)})
} else (res.redirect("/auth/signin"))
})



module.exports = router;