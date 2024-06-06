const apiurl = 'https://jsonplaceholder.typicode.com/users'
const usersContainer = document.getElementById('users_div');


async function getUsers() {

        const response = await fetch(apiurl);
        const data = await response.json();
        displayUsers(data);
        console.log(data);
}
  

function displayUsers(users) {
   /* usersContainer.innerHTML = "";
    users.forEach(user => {
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('col-md-4');
        usersDiv.innerHTML = `
        <p>nombre: ${users.name}</p>

        <div class="card m-5" style="width: 23rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text ">Nombre: </p>
          <p class="card-text">Apellido: </p>
          <p class="card-text">Dirrecion: </p>
          <p class="card-text">email: </p>
          <a href="#" class="btn btn-primary">ver arbunes </a>
          <a href="#" class="btn btn-primary">ver post </a>
          <a href="#" class="btn btn-primary">ver quehaceres </a>

        `;
        usersContainer.appendChild(usersDiv);*/
    }

getUsers(); 