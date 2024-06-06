const apiurl = 'https://jsonplaceholder.typicode.com/users'
const usersContainer = document.getElementById('users_div');


async function getUsers() {

        const response = await fetch(apiurl);
        const data = await response.json();
        displayUsers(data.results);
        console.log(data);
}
  

function displayUsers(users) {


}
getUsers(); 