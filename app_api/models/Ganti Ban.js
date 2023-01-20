const mongoose = require('mongoose');

const gantibanSchema = new mongoose.Schema({
    Harga : String,
    Ketebalan_Ban : String,
    Type_Ban : String,
    Ukuran_Ban : String
});

mongoose.model('Ganti ban', gantibanSchema, 'Ganti ban');
