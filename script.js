const apiurl = 'https://jsonplaceholder.typicode.com/users';
const usersContainer = document.getElementById('users_div');


async function getUsers() {

        const response = await fetch(apiurl);
        const data = await response.json();
        displayUsers(data);
        console.log(data);
}
  

function displayUsers(users) {
   usersContainer.innerHTML = "";
    users.forEach(user => {
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('card', 'col-md-4');
        usersDiv.innerHTML = `

      <div class="card-body">
        <h5 class="card-title">Nombre: ${user.name}</h5>
          <h5 class="card-title">Email: ${user.email}</h5>
          <h5 class="card-title">Dirreccion: ${user.address}</h5>
          <h5 class="card-title">Numero de telefono: ${user.phone}</h5>
          <h5 class="card-title">Website: ${user.website}</h5>

          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          <a href="#" class="btn btn-primary">ver arbunes </a>
          <a href="#" class="btn btn-primary">ver post </a>
          <a href="#" class="btn btn-primary">ver quehaceres </a>
        </div>
    </div>


        `;
        usersContainer.appendChild(usersDiv);
      });
    }

getUsers(); 