const express = require('express')
const app = new express()
const users = []

//serve client side files
app.use(express.static('public'))
app.use(express.json())

app.post("/login", (req, res) => {
    const user = req.body
    if (user.username.length >= 4 && user.password.length >= 4) {
        //save new account on server
        users.push(user)
        console.log(users)
        res.send({
            message: "Your account was successfully created."
        })
    }
    else {
        res.status(401)
        res.send({
            message: "Username or password is invalid."
        })
    }
})

app.listen(3000, () => console.log("Server started"))