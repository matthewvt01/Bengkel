const mongoose = require('mongoose');

const gantioliSchema = new mongoose.Schema({
    Jumlah : String,
    Harga  : String,
    Type_Oli : String
});

mongoose.model('Ganti Oli', gantioliSchema, 'Ganti Oli');
