function loadUsers2(){
    fetch("https://jsonplaceholder.org/users")
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(users){
    // console.log(data)
    const ul = document.getElementById('users-list')
    for(const user of users){
        console.log(user.firstname);
        const li = document.createElement('li');
        li.innerText = user.firstname;
        ul.appendChild(li);
        const li2 = document.createElement('li');
        li2.innerText = user.email;
        ul.appendChild(li2);
    }
}



function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });
}

function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function CreateAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}