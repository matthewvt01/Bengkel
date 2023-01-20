var express = require('express');
var router = express.Router();

//import controller
const ctrlBalancing = require("../controllers/Balancing");
const ctrlGantiban = require("../controllers/Ganti Ban");
const ctrlGantioli = require("../controllers/Ganti Oli");
const ctrlKacafilm = require("../controllers/Kaca film");
const ctrlPowersteering = require("../controllers/Power Steering");
const ctrlShockbreaker = require("../controllers/Shock Breaker");
const ctrlVelg = require("../controllers/velg");

//routes balancing
router.route('/Balancing')
    .get(ctrlBalancing.balancingShow)
    .post(ctrlBalancing.balancingCreate);

router.route('/Balancing/:id')
    .get(ctrlBalancing.balancingReadOne)
    .put(ctrlBalancing.balancingUpdateOne)
    .delete(ctrlBalancing.balancingDeleteOne);

// routes ganti ban
router.route('/Ganti Ban')
    .get(ctrlGantiban.gantibanShow)
    .post(ctrlGantiban.gantibanCreate);

router.route('/Ganti Ban/:id')
    .get(ctrlGantiban.gantibanReadOne)
    .put(ctrlGantiban.gantibanUpdateOne)
    .delete(ctrlGantiban.gantibanDeleteOne);
module.exports = router;

//routes ganti oli
router.route('/Ganti Oli')
    .get(ctrlGantioli.gantioliShow)
    .post(ctrlGantioli.gantioliCreate);

router.route('/Ganti Oli/:id')
    .get(ctrlGantioli.gantioliReadOne)
    .put(ctrlGantioli.gantioliUpdateOne)
    .delete(ctrlGantioli.gantioliDeleteOne);


    //routes Kaca film
router.route('/Kaca film')
.get(ctrlKacafilm.kacafilmShow)
.post(ctrlKacafilm.kacafilmCreate);

router.route('/Kaca film/:id')
.get(ctrlKacafilm.kacafilmReadOne)
.put(ctrlKacafilm.kacafilmUpdateOne)
.delete(ctrlKacafilm.kacafilmDeleteOne);

//routes power steering
router.route('/Power Steering')
    .get(ctrlPowersteering.PowersteeringShow)
    .post(ctrlPowersteering.PowersteeringCreate);

router.route('/Power Steering/:id')
    .get(ctrlPowersteering.PowersteeringReadOne)
    .put(ctrlPowersteering.PowersteeringUpdateOne)
    .delete(ctrlPowersteering.PowersteeringDeleteOne);

    //routes shock breaker
router.route('/Shock Breaker')
.get(ctrlShockbreaker.shockbreakerShow)
.post(ctrlShockbreaker.shockbreakerCreate);

router.route('/Shock Breaker/:id')
.get(ctrlShockbreaker.shockbreakerReadOne)
.put(ctrlShockbreaker.shockbreakerUpdateOne)
.delete(ctrlShockbreaker.shockbreakerDeleteOne);

//routes velg
router.route('/Velg')
    .get(ctrlVelg.velgShow)
    .post(ctrlVelg.velgCreate);

router.route('/Velg/:id')
    .get(ctrlVelg.velgReadOne)
    .put(ctrlVelg.velgUpdateOne)
    .delete(ctrlVelg.velgDeleteOne);