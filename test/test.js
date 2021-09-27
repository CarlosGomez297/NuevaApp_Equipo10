var expect = require('chai').expect

var user = require('../models/usersM');
var project = require('../models/proyectM');
var student = require('../models/studentM');
var leader = require('../models/leaderM');


describe('#dbModel test their validations', function(){

  /*----------------User validation-------------------*/
  it('Should be invalid if name is empty', function( done ){
    var user1 = new user({
      email: 'prueba@prueba.com',
      password: '123456789',
      age: 20
    })

    user1.validate(function(err){
      expect( err.errors.name ).to.exist;
      done();
    })
  });

  it('Should be a invalid validation ', function( done ){
    var user2 = new user({
      name: 'Juan Jaramillo',
      email: 'prueba@prueba.com',
      password: '123456789',
      age: 15
    })

    user2.validate(function(err){
      expect( err.errors.age ).to.exist;
      done();
    })
  });



/*----------------Project validation-------------------*/

  it('Should be invalid if name is empty', function( done ){

    let project1= new project(
      {
        _id:1,
        budget:1200000,
        leaders:[1],
        students:[1,2,3],
        active:true,
        status:"in progress",
        Advances:["Entrega 1"]
     },{
        versionKey: false
     }
    )

  project1.validate(function(err){
    expect( err.errors.name ).to.exist;
    done();
  })
})


  /*----------------Student validation-------------------*/
  it('Should be a invalid not phone number  ', function( done ){
    var student1 = new student(
      {
        _id:1,
        name:{
            fName:"Juan"
        },
        career:"administracion",    
     },{
        versionKey: false
     }
    )

    student1.validate(function(err){
      expect( err.errors.movil ).to.exist;
      done();
    })
  })



/*----------------Leader validation-------------------*/
it('Should be invalid if movil is empty', function( done ){
  var leader1 = new leader(
    {_id:1,
      name:{
        fName:"Juan"
    },
    email:"pedro@gmail.com",
    proyect:[1,3],
    time:1600
 },{
    versionKey: false
 }
  )

  leader1.validate(function(err){
    expect( err.errors.movil ).to.exist;
    done();
  })
})


})