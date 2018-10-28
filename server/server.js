let express = require('express')
let bodyParser = require('body-parser')


const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')
const { ObjectID } = require('mongodb')


let app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })
    todo.save().then(doc => {
        res.send(doc)
    }, err => res.status(400).send(err))
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (e) => {
        res.sendStatus(400).send(e)
    })
})

app.get('/todos/:id', (req, res) => {
    let id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.sendStatus(404).send()
    }
    Todo.findById(id).then(todo => {
        if (!todo){
            return res.status(404).send()
        }
        res.send({todo})
    }).catch(err => res.status(400).send())
})

app.listen(port, () => {
    console.log(`Started up at port ${port}`)
})

module.exports = { app }