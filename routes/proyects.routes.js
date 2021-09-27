const express = require('express');
const router = express.Router();

const Proyect = require('../models/proyectM');

// llamar la base de datos o encontrarlos
router.get('/', async(req, res) => {
    const proyects = await Proyect.find();
    function comparar(a, b){
        return a._id - b._id;
    };
    console.log(proyects.sort(comparar));
    res.json(proyects.sort(comparar));  
});

// encontrar un estudiante por el id
router.get('/:_id', async(req, res) => {
    const proyect = await Proyect.findById(req.params._id);
    res.json(proyect);
});

// insertar datos nuevos en la base de datos
router.post('/', async (req, res) =>{
    //console.log(req.body);
    const {name,_id,description,objectives,budget,Dinit,Dfin,leaders,students,active,status,Advances} = req.body;
    const proyect = new Proyect({name,_id,description,objectives,budget,Dinit,Dfin,leaders,students,active,status,Advances});
    await proyect.save();
    console.log(proyect);
    res.json({status: 'Proyect Saved'});
});

// hacer acutalizaciones en la base de datos por el id
router.put('/:_id', async(req, res) =>{
    const {name,_id,description,objectives,budget,Dinit,Dfin,leaders,students,active,status,Advances} = req.body;
    const newProyect = {name,_id,description,objectives,budget,Dinit,Dfin,leaders,students,active,status,Advances};
    await Proyect.findByIdAndUpdate(req.params._id, newProyect);
    console.log(req.params._id);
    res.json({status:'Proyect Updated'});
});

// eliminar de la base de datos un documento
router.delete('/:_id', async (req, res) =>{
    await Proyect.findByIdAndRemove(req.params._id);
    res.json({status: 'Proyect Deleted'});
});

module.exports = router;