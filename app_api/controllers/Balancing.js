const mongoose = require('mongoose');

let balancing = mongoose.model('Balancing');

const balancingShow = (req, res) => {
    balancing.find({},
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

const balancingCreate = (req, res) => {
    balancing.create({
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

const balancingReadOne = (req, res) => {
    balancing.
    findById(req.params.id).
    exec((err, pnl) => {
        res.
        status(200).
        json(pnl);
    });
};

const balancingUpdateOne = (req, res) => {
    balancing.
    findById(req.params.id).
    exec((err, pnl) => {
        pnlHarga = req.body.Harga;
        pnl.Type_Mobil = req.body.Type_Mobil;
        
        pnl.save((err, result) => {
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

const balancingDeleteOne = (req, res) => {
    balancing.
    findById(req.params.id)
        .exec((err, pnl) => {
            pnl.remove((err, result) => {
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
    balancingShow,
    balancingCreate,
    balancingReadOne,
    balancingUpdateOne,
    balancingDeleteOne
}