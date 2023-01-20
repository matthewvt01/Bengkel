const mongoose = require('mongoose');
let shockbreaker = mongoose.model('Shock Breaker');

const shockbreakerShow = (req, res) => {
    shockbreaker.find({},
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

const shockbreakerCreate = (req, res) => {
    shockbreaker.create({
        Harga: req.body.Harga,
        Warna: req.body.Warna,
        Rating: req.body.Rating,
        Type_Shockbreaker: req.body.Type_Shockbreaker,
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

const shockbreakerReadOne = (req, res) => {
    shockbreaker.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const shockbreakerUpdateOne = (req, res) => {
    shockbreaker.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.Harga = req.body.Harga;
        pnb.Warna = req.body.Warna;;
        pnb.Rating = req.body.Rating;;
        pnb.Type_Shockbreaker = req.body.Type_Shockbreaker;;
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

const shockbreakerDeleteOne = (req, res) => {
    shockbreaker.
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
    shockbreakerShow,
    shockbreakerCreate,
    shockbreakerReadOne,
    shockbreakerUpdateOne,
    shockbreakerDeleteOne
}