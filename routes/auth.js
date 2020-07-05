const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcryptjs = require("bcryptjs"); // intro to bcrypt hashing algorithm https://www.youtube.com/watch?v=O6cmuiTBZVs
const session = require("express-session");


/* ACTION : REGISTER */
router.post("/signup", (req, res, next) => {
  const user = req.body // req.body contains submited infos

  console.log(user)
  if (!user.mail || !user.password) {
    console.log("ERROR! You have to fill the form entirely!")
    return res.status(403).json("ERROR! You have to fill the form entirely!");
  } else {
    userModel
    .findOne({mail: user.mail})
    .then(dbRes => {
      if (dbRes) {
        console.log("ERROR! Sorry, this email is already taken!");
        return res.status(403).json("ERROR! Sorry, this email is already taken!");;
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
        console.log("SUCCESS! A new user has been created!");
        res.status(200).json({msg: "signup ok"});
      })
    })
    .catch(dbErr => {
      console.log("ERROR! ", dbErr);
      next(err);
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
    return res.status(403).json("invalid user infos");;
  }

  userModel
  .findOne({ mail: user.mail})
  .then(dbRes => {
    if(!dbRes) {
      // !dbRes means that no user has been found with this mail
      console.log("This email was not found...");
      return res.json({ message: "This email was not found..." });
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
      res.status(200).send("success, you've been logged in")
      return;
    } else {
      // encrypted password match failed
      console.log("ERROR! WRONG CREDENTIALS!!!")
      return res.json({ message: "The password is wrong" });;
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