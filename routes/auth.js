const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcryptjs = require("bcryptjs"); // intro to bcrypt hashing algorithm https://www.youtube.com/watch?v=O6cmuiTBZVs
const session = require("express-session");

// GO TO THE SIGNUP FORM TO REGISTER
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

/* GO TO THE SIGNIN FORM TO LOG IN */
router.get("/signin", (req, res, next) => {
  res.render("auth/signin");
});

/* ACTION : REGISTER */
router.post("/signup", (req, res, next) => {
  const user = req.body // req.body contains submited infos

  if (!user.mail || !user.password) {
    console.log("ERROR! You have to fill the form entirely!")
    return res.redirect("/auth/signup");
  } else {
    userModel
    .findOne({mail: user.mail})
    .then(dbRes => {
      if (dbRes) {
        console.log("ERROR! Sorry, this email is already taken!");
        res.redirect("/auth/signup");
        return;
      }

      const salt = bcryptjs.genSaltSync(10);
      // more on salt: https://en.wikipedia.org/wiki/Salt_(cryptography)
      const hashed = bcryptjs.hashSync(user.password, salt);
      // generated a secured random hashed password
      user.password = hashed; 
      // new password is ready for database

      userModel
      .create(user)
      .then(() => {
        res.redirect("/auth/signin");
        console.log("SUCCESS! A new user has been created!");
      })
    })
    .catch(dbErr => {
      console.log("ERROR! ", dbErr);
    })
  }
})

/* ACTION : LOGIN */
router.post("/signin", (req, res, next) => {
  const user = req.body;
  console.log(user);
  console.log(user.mail);
  console.log(user.password);

  if (!user.mail || !user.password){
    console.log("ERROR! Wrong credentials.")
    res.redirect("/auth/signin");
    return;
  }

  userModel
  .findOne({ mail: user.mail})
  .then(dbRes => {
    if(!dbRes) {
      // !dbRes means that no user has been found with this mail
      console.log("ERROR! Wrong credentials..........");
      res.redirect("/auth/signin");
      return;
    }
    // case 2: user has been found in db
    if (bcryptjs.compareSync(user.password, dbRes.password)) {
      // encryption says: password match success
      const {_doc: clone} = {...dbRes}; // make a clone of db user
      delete clone.password; // remove password from clone
      console.log(clone); // log without password
      req.session.currentUser = clone;
      // user is now in session...
      // until session.destroy
      // could be req.session.totoFriends = clone;
      console.log("WELCOME! You've been logged successfully!");
      res.redirect("/collection");
      return;
    } else {
      // encrypted password match failed
      console.log("ERROR! WRONG CREDENTIALS!!!")
      res.redirect("/auth/signin");
      return;
    }
  })
  .catch(dbErr => {
    console.log("Error: ", dbErr);
  })
})

// ACTION : LOGOUT
router.get("/signout", (req, res) => {
  req.session.destroy(() => {
    res.locals.isLoggedIn = undefined;
    res.locals.isAdmin = undefined;
    res.redirect("/auth/signin");
  });
});

module.exports = router;