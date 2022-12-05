const router = require('express').Router();
let Exercise = require('../models/exercise.model');
router.route('/').get((req,res)=>{
    User.find()
    .then(user=>res.join(users))
    .catch(err=>res.status(400).json('Error :' ,err));
});

router.route('/add').post((req,res)=>{
    const username =req.body.username;
    const discription = Number(req.body.discription);
    const duration=Date.parse(req.body.duration);
    const date=req.body.date;
    const newUser = new User({username , discription , duration , date});
    newExercise.save()
    .then(()=>{res.json('Exercise added')})
    .catch(err=>res.status(400).json('Error :' ,err));
})
module.exports=router;

