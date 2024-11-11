function loadData2(){
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    fetch(url)
    .then(res => res.json())
    .then( data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data)
}

function loadPosts(){
    fetch("https://jsonplaceholder.org/posts")
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(data){
      console.log(data)
}