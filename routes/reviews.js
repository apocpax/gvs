const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/vinyls/:id/review', isLoggedIn, reviewsCtrl.create);
router.get('/facts', isLoggedIn, reviewsCtrl.addFact);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;