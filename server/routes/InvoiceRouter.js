const express = require('express')
const router = express.Router()
const InvoicesController = require('../controller/InvoicesController')


//Get all invoices
router.get('/',InvoicesController.getInvoices)


//Create invoice
router.post('/',InvoicesController.createInvoice)



//Update invoice
router.patch('/:id',InvoicesController.updateInvoice)

//Delete invoice
router.delete('/:id',InvoicesController.deleteInvoice)


module.exports = router