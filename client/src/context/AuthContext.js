import {createContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const AuthContext = createContext({});



export const AuthContextProvider = ({ children }) => {
	const history = useHistory();
	const [user, setUser] = useState(() => {
		let userProfle = localStorage.getItem("userProfile");
		if (userProfle) {
			return JSON.parse(userProfle);
		}
		return null;
	});
	
	const login = async (payload) => {
		const apiResponse =await axios.post("http://localhost:4000/api/login", payload, {
			withCredentials: true,
		});
		
		localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
		setUser(apiResponse.data);
		
		history.push("/");
	};
	return (
		<>
			<AuthContext.Provider value={{ user, login }}>
				{children}
			</AuthContext.Provider>
		</>
	);
};


export default AuthContext;