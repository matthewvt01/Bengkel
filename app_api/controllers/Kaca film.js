const mongoose = require('mongoose');

let kacafilm = mongoose.model('kaca film');

const kacafilmShow = (req, res) => {
    kacafilm.find({},
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

const kacafilmCreate = (req, res) => {
    kacafilm.create({
        Harga: req.body.Harga,
        Ketebalan: req.body.Ketebalan,
        Type_Kaca_Film: req.body.Type_Kaca_Film
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

const kacafilmReadOne = (req, res) => {
    kacafilm.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const kacafilmUpdateOne = (req, res) => {
    kacafilm.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.Harga = req.body.Harga;
        pnb.Ketebalan = req.body.Ketebalan;;
        pnb.Type_Ban = req.body.Type_Ban;;
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

const kacafilmDeleteOne = (req, res) => {
    kacafilm.
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
    kacafilmShow,
    kacafilmCreate,
    kacafilmReadOne,
    kacafilmUpdateOne,
    kacafilmDeleteOne
}