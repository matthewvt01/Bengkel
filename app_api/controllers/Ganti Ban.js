const mongoose = require('mongoose');

let gantiban = mongoose.model('ganti ban');

const gantibanShow = (req, res) => {
    gantiban.find({},
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

const gantibanCreate = (req, res) => {
    gantiban.create({
        Harga: req.body.Harga,
        Ketebalan_Ban: req.body.Ketebalan_Ban,
        Type_Ban: req.body.Type_Ban,
        Ukuran_Ban: req.body.Ukuran_Ban
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

const gantibanReadOne = (req, res) => {
    gantiban.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const gantibanUpdateOne = (req, res) => {
    gantiban.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.Harga = req.body.Harga;
        pnb.Ketebalan_Ban = req.body.Ketebalan_Ban;;
        pnb.Type_Ban = req.body.Type_Ban;;
        pnb.Ukuran_Ban = req.body.Ukuran_Ban;;
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

const gantibanDeleteOne = (req, res) => {
    gantiban.
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
    gantibanShow,
    gantibanCreate,
    gantibanReadOne,
    gantibanUpdateOne,
    gantibanDeleteOne
}