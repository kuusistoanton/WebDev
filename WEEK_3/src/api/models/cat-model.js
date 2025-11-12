import promisePool from '../../utils/database.js';

const listAllCats = async () => {
    const [rows] = await promisePool.query('SELECT * FROM wsk_cats');
    console.log('rows', rows);
    return rows;
};

const getCatById = async (id) => {
    const [rows] = await promisePool.execute('SELECT * FROM wsk_cats WHERE cat_id = ?', [id]);
    console.log('rows', rows);
     if (rows.length === 0) {
        return false;
     }

     const catID = rows[0].owner;

     const ownerNameF = await promisePool.execute('SELECT name FROM wsk_users WHERE user_id = ?', [catID]);

     rows[0].ownerName = ownerNameF;
     return rows[0];
};

const addCat = async (cat) => {
  const {cat_name, weight, owner, filename, birthdate} = cat;
  const sql = `INSERT INTO wsk_cats (cat_name, weight, owner, filename, birthdate)
               VALUES (?, ?, ?, ?, ?)`;
  const params = [cat_name, weight, owner, filename, birthdate];
  const rows = await promisePool.execute(sql, params);
  console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
  return {cat_id: rows[0].insertId};
};

const updateCat = async (cat, id) => {
  const sql = promisePool.format(`UPDATE wsk_cats SET ? WHERE cat_id = ?`, [cat, id]);
  const rows = await promisePool.execute(sql);
  console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
    return {message: 'success'};
};

const removeCat = async (id) => {
  const [rows] = await promisePool.execute('DELETE FROM wsk_cats WHERE cat_id = ?', [id]);
  console.log('rows', rows);
    if (rows.affectedRows === 0) {
      return false;
    }
    return {message: 'success'};
};

export {listAllCats, getCatById, addCat, updateCat, removeCat};