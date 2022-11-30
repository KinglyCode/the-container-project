require('dotenv').config
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
        {name: 'YuGiOh Legendary Synchro Booster Box', category: categories[0], packAmount: 36, feature: true}

        
    ])
    console.log(items)
}

seedData()