const { json } = require("express");
const Drinks = require("../models/Drink.model");
module.exports.drinksController = {
  getDrink: async (req, res) => {
    try {
      const drink = await Drinks.find();
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  },
  getDrinkStock: async (req, res) => {
    try {
      const drink = await Drinks.find({inStock: true });
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  },
  getDrinkId: async (req, res) => {
    try {
      const drink = await Drinks.findById(req.params.id);
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  },
  addDrink: async (req, res) => {
    const { name, price, inStock, caffeine, volume, description } = req.body;
    try {
      const drink = await Drinks.create({
        name,
        price,
        inStock,
        caffeine,
        volume,
        description,
      });
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteDrink: async (req, res) => {
    try {
      const drink = await Drinks.deleteOne(req.params.id);
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  },
  changeDrink: async (req, res) => {
    try{
        const drink = await Drinks.findByIdAndUpdate(req.params.id)
        res.json(drink)
    }catch(e){
        res.json(e.message)
    }
  }
};
