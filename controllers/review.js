const Review = require("../models/reviews")

exports.createReview = (req,res)=>{
    const { _id } = req.user
    const { animeId, description } = req.body
    if( !animeId || !description) return res.status(400).json({message:"all fields required"})
    const saveReview = new Review({animeId:animeId, description:description, userId:_id})
    saveReview.save().then((response)=>{
        return res.status(200).send({status:"success",message:response})
    }).catch(error => { return res.status(500).send(error)})
}