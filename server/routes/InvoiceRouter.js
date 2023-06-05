const express = require('express')
const router = express.Router()
const InvoicesController = require('../controller/InvoicesController')
const {isAuthenticated} = require('../middlewares/AuthMiddleware')

//Get all invoices
router.get('/',isAuthenticated,InvoicesController.getInvoices)


//Create invoice
router.post('/',isAuthenticated,InvoicesController.createInvoice)



//Update invoice
router.patch('/:id',isAuthenticated,InvoicesController.updateInvoice)

//Delete invoice
router.delete('/:id',isAuthenticated,InvoicesController.deleteInvoice)


module.exports = router