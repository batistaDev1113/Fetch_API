/* === Fetch API javascript === */

let newData = document.querySelector('.dataTxt');
newData.classList.add('mt-4');

// event listener for getText button
document.getElementById('getText').addEventListener
  ('click', getText);

//event listener for getUsers button
document.getElementById('getUsers').addEventListener
  ('click', getUsers);

//event listener for getPosts button
document.getElementById('getPosts').addEventListener
  ('click', getPosts);

// fetch TXT file
function getText() {
  fetch('sample.txt')
    // using arrow functions and promises
    .then((res) => res.text())
    .then((data) => newData.innerHTML = data)
    .catch((err) => console.log(err))
}

// fetch JSON file
function getUsers() {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Users</h2>';
      data.forEach(element => {
        output += `
      <ul class="list-group mb-4">
        <li class="list-group-item">ID: ${element.id}</li>
        <li class="list-group-item">Name: ${element.name}</li>
        <li class="list-group-item">Email: ${element.email}</li>
      </ul>`
      });
      newData.innerHTML = output;
    })
    .catch((err) => console.log(err))
}


//fetch data from fake JSon API
function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Posts</h2>';
      data.forEach(post => {
        output += `
      <div class="card card-body mb-3">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>`
      });
      newData.innerHTML = output;
    })
    .catch((err) => console.log(err))
}