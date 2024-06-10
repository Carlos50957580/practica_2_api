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
      usersDiv.classList.add('col-md-4');
      usersDiv.innerHTML = `
          <div class="card h-100">
              <div class="card-body">
                  <h5 class="card-title">Nombre: ${user.name}</h5>
                  <h5 class="card-title">Email: ${user.email}</h5>
                  <h5 class="card-title">Dirección: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</h5>
                  <h5 class="card-title">Número de teléfono: ${user.phone}</h5>
                  <h5 class="card-title">Website: ${user.website}</h5>
                  <a href="#" class="btn btn-primary">Ver álbumes</a>
                  <a href="#" class="btn btn-primary">Ver posts</a>
                  <a href="#" class="btn btn-primary">Ver quehaceres</a>
              </div>
          </div>


        `;
        usersContainer.appendChild(usersDiv);
      });
    }

getUsers(); 