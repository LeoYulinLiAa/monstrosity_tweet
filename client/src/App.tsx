import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { RouteAuth, RouteProtected } from "./components/auth_utils";
import Tweet from "./components/tweet";

function App() {
  return <div>
    <Switch>
      {/*<RouteAuth exact path="/" component={ MainPage } />*/}
      {/*<RouteAuth exact path="/login" component={ LoginFormContainer } />*/}
      {/*<RouteAuth exact path="/signup" component={ SignupFormContainer } />*/}

      <Route exact path="/tweets" component={ Tweet } />
      {/*<RouteProtected exact path="/profile" component={ ProfileContainer } />*/}
      {/*<RouteProtected exact path="/new_tweet" component={ TweetComposeContainer } />*/}
    </Switch>
  </div>;
}

export default App;
