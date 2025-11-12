import promisePool from "../../utils/database";

const users = [
  {
    user_id: 1,
    name: 'Anton',
    username: 'anton',
    email: 'anton@gmail.com',
    role: 'Creator',
    password: '###########'
  },
  {
    user_id: 2643,
    name: 'Arno',
    username: 'arno',
    email: 'arno@gmail.com',
    role: 'User',
    password: '###########'
  },
];

const listAllUsers = async () => {
    const [rows] = await promisePool.query('SELECT * FROM wsk_users');
    console.log('rows', rows);
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await promisePool.execute('SELECT * FROM wsk_users WHERE user_id = ?', [id]);
    console.log('rows', rows);
     if (rows.length === 0) {
        return false;
     }
     return rows[0];
};

const addUser = async (user) => {
  const {name, username, email, password, role} = user;
  const sql = `INSERT INTO wsk_users (name, username, email, password, role)
              VALUES (?, ?, ?, ?, ?)`;
  const params = [name, username, email, password, role];
  const rows = await promisePool.execute(sql, params);
  console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
  return {user_id: rows[0].insertId};
};

const updateUser = async (user, id) => {
  const sql = promisePool.format(`UPDATE wsk_users SET ? WHERE user_id = ?`, [user, id]);
  const rows = await promisePool.execute(sql);
  console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
    return {message: 'success'};
};

const removeUser = async (id) => {
  const [catRows] = await promisePool.execute('DELETE FROM wsk_cats WHERE owner = ?', [id]);

  const [rows] = await promisePool.execute('DELETE FROM wsk_users WHERE user_id = ?', [id]);

  console.log('rows', rows);
    if (rows.affectedRows === 0) {
      return false;
    }
    return {message: 'success'};
};

export {listAllUsers, getUserById, addUser, updateUser, removeUser};