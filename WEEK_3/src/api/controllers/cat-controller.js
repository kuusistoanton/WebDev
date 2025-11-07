import {
    listAllCats,
    getCatById,
    addCat,
    updateCat,
    removeCat

    } from '../models/cat-model.js';
const getCat = (req, res) => {
    res.json(listAllCats());
};

const catById = (req, res) => {
    const cat = getCatById(req.params.id);

    if (cat){
        res.json(cat);
    } else {
        console.log("NOPE")
        res.sendStatus(404);
    }
};

const postCat = (req, res) => {
    req.body.filename = req.file.filename;

    const cat = addCat(req.body);

    if (cat.cat_id){
        res.status(201);
        res.json({message: 'Cat added successfully.', cat});
    } else {
        res.sendStatus(400);
    }
};

const putCat = (req, res) => {

};

const deleteCat = (res, req) => {

}

export {getCat, catById, postCat, putCat, deleteCat}