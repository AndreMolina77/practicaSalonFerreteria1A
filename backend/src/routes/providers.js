import express from "express"
import providers from "../models/providers.js"

const router = express.Router();

router.route("/")
.get(providersController.getallProviders)
.post(providersController.insertProviders);

export default router;
