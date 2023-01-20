const mongoose = require ('mongoose');

const velgSchema = new mongoose.Schema({
    Ukuran : String,
    Harga : String,
    Warna : String,
    Type_Velg : String
});

mongoose.model('Velg', velgSchema, 'Velg');

let velg = mongoose.model('velg');

const velgShow = (req, res) => {
    velg.find({},
        function (err, result) {
            if (err) {
                res.status(500)
                    .json({
                        'status': 'failed'
                    });
            } else {
                res.status(200)
                    .json({
                        'status': 'success',
                        'data': result
                    });
            }
        }
    )
};

const velgCreate = (req, res) => {
    velg.create({
        Ukuran: req.body.Ukuran,
        Harga: req.body.Harga,
        Warna: req.body.Warna,
        Type_Velg: req.body.Type_Velg
    }, (err, result) => {
        if (err) {
            res.status(400)
                .json(err);
        } else {
            res.status(201).
            json(result);
        }
    })
};

const velgReadOne = (req, res) => {
    velg.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const velgUpdateOne = (req, res) => {
    velg.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.Ukuran = req.body.Ukuran;
        pnb.Harga = req.body.Harga;;
        pnb.Warna = req.body.Warna;;
        pnb.Type_Velg = req.body.Type_Velg;;
        pnb.save((err, result) => {
            if (err) {
                res.
                status(404).
                json(result);
            } else {
                res.
                status(200).
                json(result);
            }
        });
    });
};

const velgDeleteOne = (req, res) => {
    velg.
    findById(req.params.id)
        .exec((err, pnb) => {
            pnb.remove((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res.
                    status(200).
                    json({
                        'status': 'success',
                        'message': 'Data Telah Terhapus'
                    });
                }
            });
        });
}

module.exports = {
    velgShow,
    velgCreate,
    velgReadOne,
    velgUpdateOne,
    velgDeleteOne
}