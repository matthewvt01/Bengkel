const mongoose = require('mongoose');

const powersteeringSchema = new mongoose.Schema({
    Harga  : String,
    Type_Mobil: String
});

mongoose.model('Power Steering', powersteeringSchema, 'Power Steering');
