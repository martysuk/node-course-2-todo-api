const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')
const { ObjectID } = require('mongodb')


let id = "5bd4d87580dbf32a945c54a1"

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found')
    }
    console.log(`User By Id ${user}`)
}).catch(err => console.log(err))

// let id = "5bd5ad0127570e1d9ce2111611"

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todo ${todo}`)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log(`Todo By Id ${todo}`)
// }).catch(err => console.log(err))