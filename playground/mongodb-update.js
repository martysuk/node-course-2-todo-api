//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID("5bcb3260ffb5df10582df1e3") },
        {
            $inc: { age: 1 },
            $set: { name: 'Marta'}
        },
        { returnOriginal: false }
    )

    //client.close()

});