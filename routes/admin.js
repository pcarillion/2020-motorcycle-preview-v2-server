const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");
const protectAdminRoute = require("../middlewares/protectAdminRoute");

router.get("/create", protectAdminRoute, (req, res, next) => {
    res.render("add-bike");
})

router.post("/create", protectAdminRoute, (req, res, next) => {
    const {name, brand, engine, horsepower, price, type, A2, description, link, image, gallery} = req.body;
    bikeModel
    .create({
        name, brand, engine, horsepower, price, type, description, link, image, A2: Boolean(A2), gallery
    })
    .then(dbRes => {
        res.redirect("/admin/dashboard");
        console.log("SUCCESS! A new bike has been added to the db!")
        console.log(brand, name, engine);
    })
    .catch(dbErr => {
        console.log("ERROR! AHAHA YOU FAILED WHILE ADDING A BIKE");
        res.redirect("/admin/add-bike");
    });
});

// GET TO THE DASHBOARD
router.get("/dashboard", protectAdminRoute, (req, res, next) => {
    bikeModel
    .find()
    .then(bikes => {
        res.render("dashboard", {bikes});
    })
    .catch(dbErr => {
        console.log("ERROR while accessing the db: ", dbErr);
    });
});

// GET TO THE EDITING FORM
router.get("/edit/:id", protectAdminRoute, (req, res, next) => {
    bikeModel
    .findById(req.params.id)
    .then(bike => {
        res.render("edit-bike", {bike})
    })
    .catch(dbErr => {
        console.log("ERROR! ", dbErr);
    });
})

// EDIT A BIKE 
router.post("/edit/:id", protectAdminRoute, (req, res, next) => {
    const {name, brand, engine, horsepower, price, type, A2, description, link, image, gallery} = req.body;
    bikeModel
    .findByIdAndUpdate(req.params.id, {
        name, brand, engine, horsepower, price, type, description, link, image, A2: Boolean(A2), gallery
    })
    .then(dbRes => {
        console.log(`SUCCESS! ${name} has been updated`);
        res.redirect("/admin/dashboard");
        console.log(req.body);
    })
    .catch(dbErr => {
        console.log("ERROR! AHAHA YOU FAILED WHILE UPDATING! ", dbErr);
        res.redirect("/admin/dashboard");
    })
})

// DELETE A BIKE 
router.get("/delete/:id", protectAdminRoute, (req, res, next) => {
    bikeModel
    .findByIdAndRemove(req.params.id)
    .then(dbRes => {
        console.log("SUCCESS! You've just deleted a bike! ", dbRes);
        res.redirect("/admin/dashboard");
    })
    .catch(dbErr => {
        console.log("ERROR! AHAHA FAILED WHILE DELETING! ", dbErr);
        res.redirect("/admin/dashboard");
    })
})

module.exports = router;