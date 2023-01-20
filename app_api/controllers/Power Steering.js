const mongoose = require('mongoose');

let powersteering = mongoose.model('Power Steering');

const PowersteeringShow = (req, res) => {
    powersteering.find({},
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

const PowersteeringCreate = (req, res) => {
    powersteering.create({
        Harga: req.body.Harga,
        Type_Mobil: req.body.Type_Mobil,
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

const PowersteeringReadOne = (req, res) => {
    powersteering.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const PowersteeringUpdateOne = (req, res) => {
    powersteering.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.Harga = req.body.Harga;
        pnb.Type_Mobil = req.body.Type_Mobil;;
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

const PowersteeringDeleteOne = (req, res) => {
    powersteering.
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
    PowersteeringShow,
    PowersteeringCreate,
    PowersteeringReadOne,
    PowersteeringUpdateOne,
    PowersteeringDeleteOne
}