const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')
const { ObjectID } = require('mongodb')


//Todo.remove({}).then(result => console.log(result))
//Todo.findOneAndRemove({_id: "5bd5d6506574f3297052e94c"}).then(todo => console.log(todo))

Todo.findByIdAndRemove("5bd5d6506574f3297052e94c").then(todo => console.log(todo))