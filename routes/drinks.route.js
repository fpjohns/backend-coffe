const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controllers");
const router = Router();

router.get("/drink", drinksController.getDrink);
router.get("/drink/in-stock", drinksController.getDrinkStock);
router.get("/drink/:id", drinksController.getDrinkId);
router.post("/drink", drinksController.addDrink);
router.delete("/drink/:id", drinksController.deleteDrink);
router.patch("/drink/:id", drinksController.changeDrink);

module.exports = router;
