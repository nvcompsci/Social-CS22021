//2. User can create new post, send to server
const $postContainer = document.getElementById("posts")
//1.1 js reference to the section element with id users
const $usersContainer = document.getElementById("users")
document.getElementById("login")
    .onsubmit = login
//2.1 Set createPost function as onsubmit handler for the create post form 
document.getElementById("createPost")
    .onsubmit = createPost

spawnPosts()
//1.4 call function to spawn user elements
spawnUsers()

//2.2 Define function createPost to send post to server
function createPost(e) {
    e.preventDefault()
    const payload = {
        body: JSON.stringify({
            text: document.getElementById("newPost").value
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("/posts", payload)
        .then(res => res.json())
        .then(res => console.log(res.body))
        .catch(error => console.error(error))
}

function login(e) {
    e.preventDefault()
    const payload = {
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("/login", payload)
        .then(res => res.json())
        .then(res => console.log(res.body))
        .catch(error => console.error(error))
}

function spawnPosts() {
    const postsHTML = loadData().posts.map( post => `
        <div class="post">
            <p>${post.text}</p>
            <div class="details">
                <div>${post.numLikes}</div>
                <div>${post.user}</div>
                <div>${post.datetime}</div>
            </div>
        </div>
    ` ).join("")
    $postContainer.innerHTML = postsHTML
}

//1.2 define a function to spawn user elements
function spawnUsers() {
    //1.3 each user element should be a div that shows user info
    //... and has a button that says Add Friend (doesn't work)
    const usersHTML = loadData().users.map( user => `
        <div class="user">
            <div class="details">
                <div>${user.username}</div>
                <div>${user.firstName}</div>
                <div>${user.lastName}</div>
                <div>${user.gender}</div>
                <div>${user.age}</div>
            </div>
            <button>Add Friend</button>
        </div>
    ` ).join("")
    $usersContainer.innerHTML = usersHTML
}


function loadData() {
    return {
        posts: [
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            },
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            },
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            },
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            }
        ],
        users: [
            {
                username: "kimmy23",
                firstName: "Kimberly",
                lastName: "Bash",
                gender: "F",
                age: 45
            },
            {
                username: "wordup",
                firstName: "John",
                lastName: "Word",
                gender: "M",
                age: 31
            },
            {
                username: "dogguy23",
                firstName: "Rob",
                lastName: "Obeneur",
                gender: "M",
                age: 62
            },
            {
                username: "silentninja84",
                firstName: "Lesa",
                lastName: "Kirkland",
                gender: "F",
                age: 17
            }
        ]
    }
}