const db = require('../db')
const Album = require ('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const albums = [
        { 
        title: 'Abbey Road', 
        artist: 'The Beatles', 
        label: 'Apple Records', 
        date: '1969', 
        },
        { 
        title: 'Revolver', 
        artist: 'The Beatles', 
        label: 'Apple Records', 
        date: '1966', 
        },
    ]
    await Album.insertMany(albums)
    console.log("added albums")
}
const run = async () => {
    await main()
    db.close()
}

run()

// const users = new Array(50).fill().map(() => ({
//     _id: Types.ObjectId(),
//     name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//     email: faker.internet.email(),
//     password_digest: faker.random.word()
//   }))


// title: {type: String, required: true},
// artist: {type: Schema.Types.ObjectId, ref: 'artists'},
// label: {type: Schema.Types.ObjectId, ref: 'labels'},
// date: {type: String, required: true},



// db.collection.insertOne()