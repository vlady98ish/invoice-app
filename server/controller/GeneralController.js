const {create, loginUser} = require("../model/User");

const register = (req,res) => {
	const user = req.body
	try{
		const createdUser = create(user)
		if(!createdUser){
			res.status(400).json({error:"Username already exists" }).end()
		}
		req.session.userId = createdUser.id;
		req.session.userName = createdUser.username;
		res.sendStatus(200)
	}
	catch (error){
		console.error('Error creating user:', error)
		res.status(500).json({error: "Internal Server Error"}).end
	}
	
}

const login = (req,res) => {
	const user = req.body;
	try {
		const userFromDb = loginUser(user)
		if(!userFromDb){
			res.status(401).json({error: 'Invalid username or password'})
		}
		req.session.userId = userFromDb.id
		req.session.userName = userFromDb.userName
		res.status(200).json(userFromDb)
	}catch (error){
		res.sendStatus(500);
	}
	
	
}

const logout = (req,res) => {
	req.session.destroy((err)=> {
		if(err) res.status(500).json({error: 'Error destroying session:'})
		
	})
	res.status(200).send(true)
}



module.exports ={
	register,
	login,
	logout
}