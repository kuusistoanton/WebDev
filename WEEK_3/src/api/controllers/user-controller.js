import {
    listAllUsers,
    getUserById,
    addUser,
    updateUser,
    removeUser

    } from '../models/user-model.js';
const getUser = (req, res) => {
    res.json(listAllUsers());
};

const userById = (req, res) => {
    const user = getUserById(req.params.id);

    if (user){
        res.json(user);
    } else {
        console.log("NOPE")
        res.sendStatus(404);
    }
};

const postUser = (req, res) => {
    const user = addUser(req.body);

    if (user.user_id){
        res.status(201);
        res.json({message: 'User added successfully.', user});
    } else {
        res.sendStatus(400);
    }
};

const putUser = (req, res) => {

};

const deleteUser = (res, req) => {

}

export {getUser, userById, postUser, putUser, deleteUser}