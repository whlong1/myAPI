const db = require('../db')
const Album = require ('../models/album')
const Rating = require('../models/rating')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRating = async () => {
    const ratings = [
        {
            tag: 'Five Stars'
        },
        {
            tag: 'Four Stars'
        },
        {
            tag: 'Three Stars'
        },
        {
            tag: 'Two Stars'
        },
        {
            tag: 'One Star'
        },
    ]
    await Rating.insertMany(ratings)
    console.log("added ratings")
}


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
    const ratings = await createRating()
    await main()
    db.close()
}

run()

