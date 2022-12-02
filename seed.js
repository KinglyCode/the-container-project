require('dotenv').config()
require('./config/database')

const Shop = require('./models/shopCategory')
const Item = require('./models/item')

const seedData = async function() {

    await Shop.deleteMany({});
    const categories = await Shop.create([
        {name: 'Yu-Gi-Oh Card Packs', sortOrder: 10},
        {name: 'Funko Pops', sortOrder: 20}
    ])

    await Item.deleteMany({})
    const items = await Item.create([
        {name: '2022 YuGiOh Battle of Chaos Booster Box', img: "https://i.imgur.com/KrdMEYf.jpg", category: categories[0], packAmount: 24, price: 74.99, feature: true},
        {name: 'YuGiOh Legendary Synchro Booster Box', img: "https://i.imgur.com/An3i2gg.jpg", category: categories[0], packAmount: 36, price: 29.99, feature: true},
        {name: 'Avengers Assemble: Black Widow Pop! Vinyl Figure', img:"https://i.imgur.com/2hr4RDB.jpg", category: categories[1], price: 24.99, feature: true},
        {name: 'YuGiOh Kings Court Box', img: 'https://i.imgur.com/kWJSoSI.jpg', category: categories[0], packAmount: 24 , price: 69.99 , feature: true},
        {name: 'YuGiOh Shadows Of Infinity Box', img: 'https://i.imgur.com/WG8IVRe.png', category: categories[0], packAmount: 24, price: 1599.99, feature: true},
        {name: 'Funko Marvel Funko POP Vinyl Figure | Carnage (Carla Unger)', img: 'https://i.imgur.com/a3YNtEy.jpg', category: categories[1], price: 29.99, feature: true},
        {name: 'Funko Pop Disney Stitch Figure', img: 'https://i.imgur.com/AMQ6um9.jpg', category: categories[1], price: 29.99, feature: true},
        {name: 'Funko Pop! Jumbo: Pokemon - Lapras', img: 'https://i.imgur.com/epWcGji.jpg', category: categories[1], price: 29.99, feature: true},

        
    ])
    console.log(items)
}

seedData()