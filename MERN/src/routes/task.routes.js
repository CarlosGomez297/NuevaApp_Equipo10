const express = require('express');
const router = express.Router();

const Student = require('../models/studentM');

// llamar la base de datos o encontrarlos
router.get('/', async(req, res) => {
    const students = await Student.find();
    function comparar(a, b){
        return a._id - b._id;
    };
    console.log(students.sort(comparar));
    res.json(students.sort(comparar));  
});

// encontrar un estudiante por el id
router.get('/:_id', async(req, res) => {
    const student = await Student.findById(req.params._id);
    res.json(student);
});

// insertar datos nuevos en la base de datos
router.post('/', async (req, res) =>{
    //console.log(req.body);
    const {name,_id,career,movil,inProyect,proyect} = req.body;
    const student = new Student({name,_id,career,movil,inProyect,proyect});
    await student.save();
    console.log(student);
    res.json({status: 'Student Saved'});
});

// hacer acutalizaciones en la base de datos por el id
router.put('/:_id', async(req, res) =>{
    const {name,_id,career,movil,inProyect,proyect} = req.body;
    const newStudent = {name,_id,career,movil,inProyect,proyect};
    await Student.findByIdAndUpdate(req.params._id, newStudent);
    console.log(req.params._id);
    res.json({status:'Student Updated'});
});

// eliminar de la base de datos un documento
router.delete('/:_id', async (req, res) =>{
    await Student.findByIdAndRemove(req.params._id);
    res.json({status: 'Student Deleted'});
});

module.exports = router;