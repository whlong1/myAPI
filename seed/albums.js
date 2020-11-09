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

