const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcryptjs = require("bcryptjs"); // intro to bcrypt hashing algorithm https://www.youtube.com/watch?v=O6cmuiTBZVs
const session = require("express-session");
const passport = require("passport");


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
  console.log("trying to log in...")
  console.log(req.body)
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err || !user)  {
      console.log("invalid user infos")
      return res.status(403).json("invalid user infos"); // 403 : Forbidden
    } 
    /**
     * req.Login is a passport method
     * check the doc here : http://www.passportjs.org/docs/login/
     */
    req.logIn(user, function(err) {
      /* doc says: When the login operation completes, user will be assigned to req.user. */
      if (err) {
        console.log("something went wrong during log in")
        return res.json({ message: "Something went wrong logging in" });
      }

      // We are now logged in
      // You may find usefull to send some other infos
      // dont send sensitive informations back to the client
      // let's choose the exposed user below
      const { _id, mail, } = user;

      console.log("user is loggedin through passport")
      // and only expose non-sensitive inofrmations to the client's state
        res.status(200).json({
          currentUser: {
            _id,
            mail
          }
        })
    });
  })(req, res, next); // IIFE (module) pattern here (see passport documentation)
})

// ACTION : LOGOUT
router.get("/signout", (req, res) => {
  req.session.destroy(() => {
    res.locals.isLoggedIn = undefined;
    res.locals.isAdmin = undefined;
    res.redirect("/auth/signin");
  });
});

// check logged in

router.use("/is-loggedin", (req, res, next) => {
  console.log(req.session.currentUser)
  if (req.session.currentUser) {
    // method provided by passport
    const { _id, mail } = req.user;
    return res.status(200).json({
      currentUser: {
        _id,
        email
      }
    });
  }
  res.status(403).json("Unauthorized");
});

module.exports = router;