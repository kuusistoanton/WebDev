const catItems = [
  {
    cat_id: 1,
    name: 'Kisu',
    birthdate: '2023-10-08',
    weight: 6,
    owner: 'Hessu Hopo',
    filename: 'shfghsdhjvhj2te63eh3vr3rhe',
  },
  {
    cat_id: 2,
    name: 'Misu',
    birthdate: '2021-11-18',
    weight: 7,
    owner: 'Hessu',
    filename: 'fdydhjsekbfhjbdjk33etu3h3e',
  },
];

const listAllCats = () => {
    return catItems;
};

const getCatById = (id) => {
    console.log("CATSSSSSSSSS");
    console.log(id)
    
    return catItems.find((item) => item.cat_id == id);
};

const addCat = (cat) => {
    const {cat_name, birthdate, weight, owner, filename} = cat;
    const newId = catItems.length + 1;
    catItems.unshift({cat_id: newId, cat_name, birthdate, weight, owner, filename});
    return {cat_id: newId};
};

const updateCat = () => {

};

const removeCat = () => {

};

export {listAllCats, getCatById, addCat, updateCat, removeCat};