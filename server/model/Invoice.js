const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const dataFilePath = path.join(__dirname, 'db.json')

const getAllInvoices = () => {
	try{
		const data = fs.readFileSync(dataFilePath,'utf8')
		const jsonData = JSON.parse(data)
		console.log("GET ALL INVOICES")
		console.table(jsonData)
		return jsonData.invoices
	} catch (error){
		console.error("Error reading invoices from JSON file.")
		return {err: error.message}
	}
}


const createInvoice = (invoice) => {
	try{
		const data = fs.readFileSync(dataFilePath, 'utf8')
		const jsonData = JSON.parse(data)
		console.log("CREATE INVOICE")
		const invoiceId = uuid.v4()
		const newInvoice = {
			id: invoiceId,
			...invoice
		}
		jsonData.invoices.push(newInvoice)
		fs.writeFileSync(dataFilePath,JSON.stringify(jsonData))
		return newInvoice
	} catch (error){
		console.error("Error create invoice from JSON file.")
		return {err: error.message}
	}
}


module.exports = {

}