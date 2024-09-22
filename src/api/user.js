import axios from 'axios';

const baseurl = 'https://racheldatabase.onrender.com/users';
// const baseurl = 'https://racheldatabase2.onrender.com/user';
// const baseurl = 'https://racheldatabase2.onrender.com/';
// const baseurl = 'http://localhost:3010'


export const getUsers = async () => await axios.get(baseurl);

export const postUsers = async (data) => {
    return await axios.post(baseurl, data)
};

export const deleteUsers = async (id) => {
    return await axios.delete(`${baseurl}/${id}`);
};


