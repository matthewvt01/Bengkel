const mongoose = require('mongoose');

const shockbreakerSchema = new mongoose.Schema({
    Harga  : String,
    Warna   : String,
    Rating  : String,
    Type_Shockbreaker   : String
});

mongoose.model('Shock Breaker', shockbreakerSchema, 'Shock Breaker');
