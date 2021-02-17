import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); // Initialize our router

let users = [];


// All routes in here are starting with /users
router.get('/', (req, res) => {  
    res.send(users);
});

router.post('/', (req, res) => { // Sends data from front-end to the server

    const user = req.body;

     //const userWithID = {...user, id: uuidv4} // New Object, spreading the properties user and id which is equal to userWithID

    users.push({ ...user, id: uuidv4() });

    console.log(`User ${user.firstName} added to the database.`);

});

router.get('/:id', (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);



    res.send(foundUser);

});
 
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id); //Filter function works if user = true it keeps user in array else then it removes from array

    res.send(`User with the id ${id} deleted from the database.`);

});

router.patch('/:id', (req, res) => {
    const { id } = request.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName) user.firstName = firstName;
    if (lastName)user.lastName = lastName;
    if (firstName) user.age = age;  

    res.send(`User with the id ${id} has been updated`);
})


export default router // Exporting so we can make use of it in index.js