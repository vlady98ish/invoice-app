const getInvoices = (req,res) => {
	res.status(200).send("GET INVOICES")
}
const deleteInvoice = (req,res) => {
	res.status(200).send("DELETE INVOICE")
}
const createInvoice = (req,res) => {
	res.status(200).send("CREATE INVOICE")
}

const updateInvoice = (req,res) => {
	res.status(200).send("UPDATE INVOICE")
	
}


module.exports ={
	getInvoices,
	deleteInvoice,
	createInvoice,
	updateInvoice
}