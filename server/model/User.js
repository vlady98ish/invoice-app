const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const dataFilePath = path.join(__dirname, 'db.json')

class User {
	constructor(fullName,email,password) {
	}
}


const createUser = (user) => {
	try {
		const data = fs.readFileSync(dataFilePath,'utf8')
		const jsonData = JSON.parse(data)
		jsonData.push(user)
		fs.writeFileSync(dataFilePath,JSON.stringify(jsonData))
		return user
	}catch (error){
		console.error("Error creating user in JSON file")
	}
}

module.exports = {
	create: createUser
}