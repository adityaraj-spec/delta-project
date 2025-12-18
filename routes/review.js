const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js'); 
const Review = require('../models/review.js');
const Listing = require("../models/listing.js");
const { validatereview , isLoggedIn, isReviewAuthor} = require('../middleware.js');
const reviewController = require('../controllers/reviews.js');

// Create review routes
router.post("/", isLoggedIn, validatereview, wrapAsync(reviewController.createReview));  

// delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destoryReview));

module.exports = router;
