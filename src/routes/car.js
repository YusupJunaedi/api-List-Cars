const express = require('express')
const Car = require('../models/car')
const router = express.Router()
const uploadIMG = require('../Middlewares/uploadIMG')
const { Error } = require('mongoose')

router.get('/', async (req, res) => {
    try{
        const getCars = await Car.find()
        res.json(getCars)
    } catch(err){
        res.json({message: err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const getById = await Car.findById({_id: req.params.id})
        res.json(getById)
    } catch(err){
        res.json({message: err})
    }
})

router.post('/', uploadIMG.singleUpload, async (req, res) => {
    const post = new Car({
        produsen: req.body.produsen,
        nama: req.body.nama,
        harga: req.body.harga,
        mesin: req.body.mesin,
        tenaga: req.body.tenaga,
        tempat_duduk: req.body.tempat_duduk,
        jenis_transmisi: req.body.jenis_transmisi,
        gambar: req.body.image
    })

    try {
        const postSaved = await post.save()
        res.json(postSaved)
    } catch(err) {
        res.json({message: err})
    }
   
})

router.patch('/:id', uploadIMG.singleUpload, async (req, res) => {
    try {
        const update = await Car.updateOne(
            {_id: req.params.id},
            { $set: req.body})
             res.json(update)
    } catch(err) {
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteCar = await Car.deleteOne({_id: req.params.id})
        res.json(deleteCar)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router