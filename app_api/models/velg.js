const mongoose = require('mongoose');

const velgSchema = new mongoose.Schema({
    Ukuran  : String,
    Harga  : String,
    Warna  : String,
    Type_Velg: String
});

mongoose.model('Velg', velgSchema, 'Velg');
