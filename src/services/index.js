import axios from 'axios';

const mainUrl = "https://api.github.com/users"

export const getUserData = async (user) => {
    console.log(user);
    return await axios.get(`${mainUrl}/${user}/repos?per_page=5`);
}