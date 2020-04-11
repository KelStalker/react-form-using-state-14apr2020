import React from "react";

interface ILoginProps {}

interface ILoginState {
  firstName: string;
  lastName: string;
  passWord: string;
}

export default class Login extends React.Component<
ILoginProps,
ILoginState
> {
    constructor(props: string) {
        super(props)
        this.state = {
            firstName: "blank",
            lastName: "blank",
            passWord: "blank",
        };
    }

updateLoginInfo = (event: any) => {
    let updatedFirstName = this.state.firstName;
    let updatedLastName = this.state.lastName;
    let updatedPassWord = this.state.passWord
    if (event.target.name === "first-name") {
        updatedFirstName = event.target.value;
      } else if (event.target.name === "last-name") {
        updatedLastName = event.target.value;
      } else if (event.target.name === "pass-word") {
        updatedPassWord = String(event.target.value);
      }
      this.setState({
          firstName: updatedFirstName,
          lastName: updatedLastName,
          passWord: updatedPassWord,
      });
    };
render() {
    return (
        <div>
          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
          <p>Your password is {this.state.passWord}</p>
          <form>
            <h3>Update Login</h3>
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              name="first-name"
              value={this.state.firstName}
              onChange={this.updateLoginInfo}
            />
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              name="last-name"
              value={this.state.lastName}
              onChange={this.updateLoginInfo}
            />
            <label htmlFor="pass-word">Age:</label>
            <input
              type="text"
              name="pass-word"
              value={this.state.passWord}
              onChange={this.updateLoginInfo}
            />
          </form>
        </div>
      );
    }

}