const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Problems = require('../models/Problems')
const fetchUser = require('../middleware/fetchUser')

//Route 1 : get all the listed problems by using : GET "/api/problems/fetchall" - Login required
router.get('/fetchall', fetchUser, async (req, res) => {
   try {
        //fetch all the listed problems of loggined user
        const problems = await Problems.find({ user: req.user.id });
        res.json(problems)

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error" });
    }

})

//Route 2 : add  the problem using : POST "/api/problems/add" - Login required
router.post('/add', fetchUser, [
    body('problemName', 'problem name can not be empty').notEmpty(),
    body('websiteURL', 'website url can not be empty').notEmpty()
], async (req, res) => {
    let success = false;

    try {
        //validate the user data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }

        //getting data
        const { problemName, platformName, topic, description,  websiteURL } = req.body;

        //add new problem
        const addProblem = new Problems({ problemName, platformName, topic,  description, websiteURL, user: req.user.id })
        const savedProblem = await addProblem.save();
        success = true;
        res.json({success, savedProblem})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success, error: "internal server error" });
    }
})


//Route 4 : delete an existing problem : DELETE  "/api/problem/delete" - Login required
router.delete('/delete/:id', fetchUser, async (req, res) => {
    let success = false;

    try {

        let problem = await Problems.findById(req.params.id);
        if (!problem) {
            return res.status(404).json({success, error:"This problem does not exist"});
        }

        //allow deletion only actual user there
        if (problem.user.toString() !== req.user.id) {
            return res.status(404).json({success, error: "User does not exist"});

        }

        const updatedProblem = await Problems.findByIdAndDelete(req.params.id)
        success = true
        res.json({success, message: "Problem have been deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success, error: "internal server error" });
    }

})

module.exports = router;