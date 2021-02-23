const express = require('express')
const Car = require('../models/car')
const Motor = require('../models/Motor')
const router = express.Router()
const uploadIMG = require('../Middlewares/uploadIMG')
const { Error } = require('mongoose')

router.get('/', async (req, res) => {
    try{
        const getMotor = await Motor.find()
        res.json(getMotor)
    } catch(err){
        res.json({message: err})
    }
})


router.post('/', uploadIMG.singleUpload, async (req, res) => {
    const post = new Motor({
        produsen: req.body.produsen,
        nama: req.body.nama,
        harga: req.body.harga,
        mesin: req.body.mesin,
        gambar: req.body.gambar
    })

    try {
        const postSaved = await post.save()
        res.json(postSaved)
    } catch(err) {
        res.json({message: err})
    }
   
})


module.exports = router