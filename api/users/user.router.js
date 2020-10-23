const {createUser, test_score, high_score,avg_score}=require('./user.controller');
const router = require('express').Router();


router.post("/",createUser);
router.post("/testscore",test_score);
router.get("/testscore/highscore",high_score);
router.get("/testscore/avgscore",avg_score);

module.exports=router;

