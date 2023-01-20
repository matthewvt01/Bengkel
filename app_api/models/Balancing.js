const mongoose = require('mongoose');

const balancingSchema = new mongoose.Schema({
    Harga : String,
    Type_Mobil : String,
});

mongoose.model('Balancing', balancingSchema, 'balancing');