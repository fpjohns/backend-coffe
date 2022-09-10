const mongoose = require("mongoose")
const DrinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    caffeine: String,
    volume: String,
    description: String,
})

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;