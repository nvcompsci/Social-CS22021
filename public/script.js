const $postContainer = document.getElementById("posts")
spawnPosts()

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
        ]
    }
}