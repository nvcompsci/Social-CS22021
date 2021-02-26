const express = require('express')
const sqlite3 = require('sqlite3')
const app = new express()
const db = new sqlite3.Database('./db/social.db')
const users = loadData().users

//serve client side files
app.use(express.static('public'))
app.use(express.json())

//3.2 define request handler for POST on /posts
app.post("/posts", (req,res)=> {
    const post = req.body;
    //3.2.1. verify the post is at least 5 characters long
    if (post.text.length >= 5) {
        //3.2.2. add to posts if valid
        const sql = "INSERT INTO posts (content, user_id) VALUES (?,?);"
        db.run(sql,[post.text,post.user_id])
        //3.2.3. send response 'Post successfully saved.'
        res.send({
            message: "Post successfully saved"
        })
    }
    //3.2.4. if invalid send error response
    else {
        res.status(401)
        res.send({
            message: "Post is not long enough."
        })
    }
})

//R3. define request handler for POST on /questions

    //R3.1. verify the question is at least 10 characters long
    
        //R3.2. add to questions table if valid (only field is content)
        
        //R3.3. send response 'Post successfully saved.'
       
    //R3.4. if invalid send error response

app.listen(3000, () => console.log("Server started"))