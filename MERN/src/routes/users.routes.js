const express = require('express');
const router = express.Router();

const User = require('../models/userM');

// llamar la base de datos o encontrarlos
router.get('/', async(req, res) => {
    const users = await User.find();
    function comparar(a, b){
        return a._id - b._id;
    };
    console.log(users.sort(comparar));
    res.json(users.sort(comparar));  
});

// encontrar un estudiante por el id
router.get('/:_id', async(req, res) => {
    const user = await User.findById(req.params._id);
    res.json(user);
});

// insertar datos nuevos en la base de datos
router.post('/', async (req, res) =>{
    //console.log(req.body);
    const {_id,nick,password,rol,user,email} = req.body;
    const users = new User({_id,nick,password,rol,user,email});
    await users.save();
    console.log(users);
    res.json({status: 'User Saved'});
});

// hacer acutalizaciones en la base de datos por el id
router.put('/:_id', async(req, res) =>{
    const {_id,nick,password,rol,user,email} = req.body;
    const newUser = {_id,nick,password,rol,user,email};
    await User.findByIdAndUpdate(req.params._id, newUser);
    console.log(req.params._id);
    res.json({status:'User Updated'});
});

// eliminar de la base de datos un documento
router.delete('/:_id', async (req, res) =>{
    await User.findByIdAndRemove(req.params._id);
    res.json({status: 'User Deleted'});
});

module.exports = router;