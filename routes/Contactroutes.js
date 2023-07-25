const express = require("express")
const router = express.Router()
const {getContacts, CreateContacts, updateContact, deleteContact}   = require ("./Controllers/ContactController")

router.get("/", getContacts)

router.post("/", CreateContacts)

router.put("/:id", updateContact)

router.delete("/:id", deleteContact)

module.exports= router