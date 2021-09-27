const express = require('express');
const router = express.Router();

const Leader = require('../models/leaderM');

// llamar la base de datos o encontrarlos
router.get('/', async(req, res) => {
    const leaders = await Leader.find();
    function comparar(a, b){
        return a._id - b._id;
    };
    console.log(leaders.sort(comparar));
    res.json(leaders.sort(comparar));  
});

// encontrar un estudiante por el id
router.get('/:_id', async(req, res) => {
    const leaders = await Leader.findById(req.params._id);
    res.json(leaders);
});

// insertar datos nuevos en la base de datos
router.post('/', async (req, res) =>{
    //console.log(req.body);
    const {name,_id,movil,email,proyect,time} = req.body;
    const leader = new Leader({name,_id,movil,email,proyect,time});
    await leader.save();
    console.log(leader);
    res.json({status: 'Leader Saved'});
});

// hacer acutalizaciones en la base de datos por el id
router.put('/:_id', async(req, res) =>{
    const {name,_id,movil,email,proyect,time} = req.body;
    const newLeader = {name,_id,movil,email,proyect,time};
    await Leader.findByIdAndUpdate(req.params._id, newLeader);
    console.log(req.params._id);
    res.json({status:'Leader Updated'});
});

// eliminar de la base de datos un documento
router.delete('/:_id', async (req, res) =>{
    await Leader.findByIdAndRemove(req.params._id);
    res.json({status: 'Leader Deleted'});
});

module.exports = router;