const mongoose = require('mongoose');

const gantifilmSchema = new mongoose.Schema({
    Ketebalan : String,
    Harga  : String,
    Type_Kaca_film : String
});

mongoose.model('Ganti Kaca film', gantikacafilmSchema, 'Ganti Kaca film');
