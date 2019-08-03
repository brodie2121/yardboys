
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
// import AuthHelperMethods from '.components/AuthHelperMethods'
// import withAuth from './components/withAuth'
import TweetSearch1 from "./components/tweetSearch1";
import LandingPage from "./components/landingPage";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";

import "bulma/css/bulma.css";
import { Navbar, NavbarStart, NavbarEnd, NavbarItem } from "bloomer";

import { Container } from "bloomer/lib/layout/Container";

const containerStyle = {
  background: "#f3f3f3",
  marginTop: "10px"
};

const bodyStyle = {
  background: "#f3f3f3",
  minHeight: "900px"
};

const titleStyle = {
  color: "whitesmoke",
  fontStyle: "Gotham",
  fontSize: "4rem",
  textAlign: "center"
};

const searchColumnStyle = {
  marginTop: "20px"
};

class App extends Component {
  // Auth = new AuthHelperMethods()

  state = {
    login: false,
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    search_template: "",
    search_one: "",
    search_two: "",
    search_three: "",
    search_four: "",
    user: {}
  };

  // async componentDidMount() {
  //   const localLogin = await localStorage.getItem("login");
  //   console.log("this is locallogin on app js", localLogin);
  //   this.setState({
  //     login: localLogin
  //   });
  // }

  // _handleLogout = () => {
  //   this.Auth.logout()
  //   this.props.history.replace('/login')
  // }

  componentDidMount() {
    const userStatus = JSON.parse(window.sessionStorage.getItem("user"));
    // console.log("this is userstatus: ", userStatus);
    // console.log("this is login:", login);
    if (!!userStatus) {
      this.setInitialState(userStatus);
    }
  }

  handleLoginState = async user => {
    // maybe an await here???
    this.setInitialState(user);
    window.sessionStorage.setItem("user", JSON.stringify(user));
  };

  setInitialState = user => {
    const {
      login,
      id,
      first_name,
      last_name,
      email,
      search_template,
      search_one,
      search_two,
      search_three,
      search_four
    } = user;
    this.setState({
      id,
      login,
      first_name,
      last_name,
      email,
      search_template,
      search_one,
      search_two,
      search_three,
      search_four
    });
  };

  handleLogoutState = () => {
    window.sessionStorage.clear();
    console.log("logout handler fired");
    this.setState({
      login: false,
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      search_template: "",
      search_one: "",
      search_two: "",
      search_three: "",
      search_four: "",
      user: {}
    });
  };

  render() {
    const { login } = this.state;
    //window.sessionStorage.setItem("loggedInStatus", login);

    const { search_one } = this.state;
    console.log("this is appjs search one: ", search_one);
    const { search_two } = this.state;
    const { search_three } = this.state;
    const { search_four } = this.state;
    return (
      <Router>
        <body style={bodyStyle}>
          <Navbar
            style={{
              border: "solid 1px #00D1B2",
              margin: "0",
              background: "#FFCD00",
              color: "black"
            }}
          >
            <NavbarStart>
              <NavbarItem>
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </NavbarItem>
              {!!login ? (
                <NavbarItem>
                  <Link to="/tweetsearch" style={{ color: "black" }}>
                    TweetSearcher
                  </Link>
                </NavbarItem>
              ) : null}
            </NavbarStart>
            <NavbarEnd>
              {!!login ? (
                <NavbarItem>
                  <Link
                    onClick={this.handleLogoutState}
                    style={{ color: "black" }}
                  >
                    Logout
                  </Link>
                </NavbarItem>
              ) : (
                <>
                  <NavbarItem>
                    <Link to="/users/login" style={{ color: "black" }}>
                      Login
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link to="/users/signup" style={{ color: "black" }}>
                      Sign Up
                    </Link>
                  </NavbarItem>
                </>
              )}
            </NavbarEnd>
          </Navbar>
          <Container style={containerStyle}>
            <Route path="/" exact component={LandingPage} />
            <Route
              path="/tweetsearch"
              render={props => (
                <TweetSearch1
                  style={searchColumnStyle}
                  {...props}
                  search_one={search_one}
                  search_two={search_two}
                  search_three={search_three}
                  search_four={search_four}
                />
              )}
            />
            <Route
              path="/users/login"
              render={props => (
                <Login
                  {...props}
                  user={this.state}
                  handleLoginState={this.handleLoginState}
                />
              )}
            />
            <Route path="/users/signup" component={Register} />
          </Container>
        </body>
      </Router>
    );
  }
}

export default App;