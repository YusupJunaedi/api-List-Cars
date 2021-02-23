const mongoose = require('mongoose')

const motorSchema = mongoose.Schema({
    produsen: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    mesin: {
        type: Number,
        required: true
    },
    gambar: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('List_motor', motorSchema)