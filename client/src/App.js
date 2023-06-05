import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SignIn from "./components/auth/signin/Signin";
import SignUp from "./components/auth/signup/SignUp";
import axios from "axios";
import InvoiceDashboard from "./components/dashboard/InvoiceDashboard";
import { useCookies } from "react-cookie";
import {useState} from "react";
const PrivateRoute = ({ component: Component,cookies, ...rest }) => {
  const [isAuthenticated,setIsAuthenticated] = useState()
  if(cookies){
    setIsAuthenticated(isAuthenticated)
  }
  
  console.log(isAuthenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

function App() {
  const [cookies, setCookies] = useCookies();
  axios.defaults.withCredentials = true
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup"  component={SignUp}/>
        <PrivateRoute  exact path="/" component={InvoiceDashboard} cookies={cookies}/>
        {/* Other routes */}
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
