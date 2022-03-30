import HomePage from "./pages/home-page/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-out.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubsrcibeFromAuth = null;

  componentDidMount() {
    this.unsubsrcibeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubsrcibeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
