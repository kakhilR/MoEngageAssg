var axios = require('axios');
const Review = require('../models/reviews');

function animeApi(url){
    return axios({
        method: 'get',
        url:url,
        headers: {
        'Authorization': `Bearer ${process.env.AcceptAUTH_URI}` ,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(result =>{
        return result.data
    }).catch(err =>{
            console.log(err)
    })
}

exports.getAnime = async (req,res)=>{
    let data = await animeApi(`${process.env.ANI_URL}`)
    const {title, genre, description} = req.query
    if(title){
        let result =  data.data.documents.filter(o => o.titles.en.includes(title))
        if (result.length == 0)  return res.send({message:"No Anime found"})
        return res.send(result)
    }
    else if(genre){
        let result =  data.data.documents.filter(o => o.genres.includes(genre))
        if (result.length == 0) return res.send({message:"No Anime found"})
        return res.send(result)
    }
    else if (description){
        let result =  data.data.documents.filter(o => o.descriptions.en.includes(description))
        if (result.length == 0) return res.send({message:"No Anime found"})
        return res.send(result)
    }
    else{
        if (data.length == 0) return res.send({message:"No Anime found"})
        return res.send(data.data.documents)
    }
    
}

exports.getAnimeById = async (req,res)=>{
    try{
        const {animeId} = req.params
        let result = []
        let data = await animeApi(process.env.ANI_URL+`/${animeId}`)
        let anime = await Review.find({animeId:animeId})
        if (anime.length == 0) return res.send({message:'no review for anime found'})
        result.push(data,anime)
        return res.send(result)
    }
    catch(err){
        res.send(err)
    }
}