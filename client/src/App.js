import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SignIn from "./components/auth/signin/Signin";
import SignUp from "./components/auth/signup/SignUp";
import axios from "axios";
import InvoiceDashboard from "./components/dashboard/InvoiceDashboard";
import AuthContext, {AuthContextProvider} from "./context/AuthContext";
import {useContext} from "react";

const PrivateRoute = ({ component: Component,cookies, ...rest }) => {
  const {user} = useContext(AuthContext)
 
  
  console.log(user)
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

function App() {
   axios.defaults.withCredentials = true
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <PrivateRoute  exact path="/" component={InvoiceDashboard}/>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup"  component={SignUp}/>
        {/* Other routes */}
      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
