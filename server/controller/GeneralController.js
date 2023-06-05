

const register = (req,res) => {
	res.status(200).send("Register")
	
}

const login = (req,res) => {
	res.status(200).send("Login")
	
}

const logout = (req,res) => {
	res.status(200).send("Logout")
}



module.exports ={
	register,
	login,
	logout
}