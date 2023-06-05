const fs = require('fs')
const path = require('path')
const dataFilePath = path.join(__dirname, 'db.json')
const uuid = require('uuid')

const createUser = (newUser) => {
	newUser = {
		id: uuid.v4(),
		...newUser
	}
	try {
		console.log(dataFilePath)
		const data = fs.readFileSync(dataFilePath,'utf8')
		const jsonData = JSON.parse(data)
		if(jsonData.users.some((user)=> user.username === newUser.username)){
			return {}
		}
		jsonData.push(user)
		console.log(`JSON data ${jsonData}`)
		fs.writeFileSync(dataFilePath,JSON.stringify(jsonData))
		return user
	}catch (error){
		console.error("Error creating user in JSON file")
		throw Error(error.message)
	}
}

const loginUser = (newUser) => {
	try {
		console.log(newUser)
		const data = fs.readFileSync(dataFilePath,'utf8')
		const jsonData = JSON.parse(data)
		const users = jsonData.users
		return users.find((user) => user.username === newUser.username && user.password === newUser.password)
	} catch (error) {
		console.error("Error read user from JSON file")
		throw Error(error.message)
		
	}
}

module.exports = {
	create: createUser,
	loginUser
}