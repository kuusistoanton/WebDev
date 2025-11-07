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

const listAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    
    return users.find((item) => item.user_id == id);
};

const addUser = (user) => {
    const {name, username, email, role, password} = user;
    const newId = users.length + 1;
    users.unshift({user_id: newId, name, username, email, role, password});
    return {user_id: newId};
};

const updateUser = () => {

};

const removeUser = () => {

};

export {listAllUsers, getUserById, addUser, updateUser, removeUser};