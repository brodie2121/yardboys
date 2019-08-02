import React, { Component } from "react";
import AuthHelperMethods from "./AuthHelperMethods";

// High order component frequently written as a function that returns a class

export default function withAuth(AuthComponent) {
  const Auth = new AuthHelperMethods();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    };

    // In the component did mount, we would want to do a couple of important taskts to verify the current authentication status of user

    componentDidMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/login");
      } else {
        //Try to get confirmation message from Auth helper
        try {
          const confirm = Auth.getConfirm();
          console.log("auth confirmation is: ", confirm);
          this.setState({
            confirm: confirm,
            loaded: true
          });
        } catch (err) {
          //Print out error for security reasons
          console.log(err);
          Auth.logout();
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      if (this.state.loaded == true) {
        if (this.state.confirm) {
          console.log("confirmed!");
          return (
            //component that is currently being wrapped
            <AuthComponent
              history={this.props.history}
              confirm={this.state.confirm}
            />
          );
        } else {
          console.log("not confirmed!");
          return null;
        }
      } else {
        return null;
      }
    }
  };
}
