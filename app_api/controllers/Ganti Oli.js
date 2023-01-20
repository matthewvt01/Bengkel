const mongoose = require('mongoose');

let gantioli = mongoose.model('Ganti Oli');

const gantioliShow = (req, res) => {
    gantioli.find({},
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

const gantioliCreate = (req, res) => {
    gantioli.create({
        judul: req.body.judul,
        tempat: req.body.tempat,
        deskripsi: req.body.deskripsi,
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

const gantioliReadOne = (req, res) => {
    gantioli.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const gantioliUpdateOne = (req, res) => {
    gantioli.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.Jumlah = req.body.Jumlah;
        pnb.Harga = req.body.Harga;;
        pnb.Type_Oli = req.body.Type_Oli;;
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

const gantioliDeleteOne = (req, res) => {
    gantioli.
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
    gantioliShow,
    gantioliCreate,
    gantioliReadOne,
    gantioliUpdateOne,
    gantioliDeleteOne
}