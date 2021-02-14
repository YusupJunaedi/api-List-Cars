const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
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
    tenaga: {
        type: String,
        required: true
    },
    tempat_duduk: {
        type: Number,
        required: true
    },
    jenis_transmisi: {
        type: String,
        required: true
    },
    gambar: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('List', carSchema)