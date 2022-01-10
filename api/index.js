import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;

const models= require("./server/src/models");
const Students =models.students;
const Courses =models.courses;

// main
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
 }));
 
 app.get('/students', (req,res)=>{
    Students.findAll()
    .then((users)=>{
        res.send(users);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.get('/courses', (req,res)=>{
    Courses.findAll()
    .then((courses)=>{
        res.send(courses);
    })
    .catch((err)=>{
        console.log(err);
    })
});

//Get individual course

app.get('/courses/:id', (req, res) => {
   const { id } = req.params;
   Courses.findOne(
      {where:{
          id: id
      }} 
   ).then((course)=> {
       res.send(course);
   })
   .catch((err)=> {
       console.log(err);
   })
});

/* Courses.destroy({
    where: { id: 2}
}
) */

Courses.destroy({ truncate: true, restartIdentity: true })

 app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
 });

 export default app;

 

