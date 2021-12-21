import React from "react";
import TableUsers from "./components/TableUsers";
import UserProvider from "./context/userContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetail from "./components/UserDetail";
 

function App() {
  return (
    <UserProvider>
     
        <Router>
          <Switch>
            <Route exact path="/" component={TableUsers} />
            <Route path="/user-details/:id" component={UserDetail} />
          </Switch>
        </Router>
   
    </UserProvider>
  );
}

export default App;
