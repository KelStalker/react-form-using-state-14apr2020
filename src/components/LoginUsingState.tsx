import React from "react";

interface ILoginState {}

interface ILoginState {
  firstName: string;
  lastName: string;
  passWord: string;
  loggedIn: boolean;
}

export default class LoginUsingState extends React.Component<
  ILoginUsingStateProps,
  ILoginUsingStateState
> {
  constructor(props: string) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      passWord: "",
      loggedIn: false,
    };
  }

  updateLoginUsingState = (event: any) => {
    event.preventDefault();

    let firstNameString: string, lastNameString: string, passWordString: string;

    const firstName: HTMLInputElement | null = document.querySelector(
      '[name="first-name"]'
    );
    const lastName: HTMLInputElement | null = document.querySelector(
      '[name="last-name"]'
    );
    const age: HTMLInputElement | null = document.querySelector(
      '[name="pass-word"]'
    );

    if (firstName === null) firstNameString = "";
    else firstNameString = firstName.value;

    if (lastName === null) lastNameString = "";
    else lastNameString = lastName.value;

    if (passWord === null) passWordString = passWord.value;
    else passWordString = passWord.value;

    this.setState({
      firstName: firstNameString,
      lastName: lastNameString,
      passWord: passWordString,
      loggedIn: !this.state.loggedInString, // Uses '!' to reverse the boolean
    });
  };
  loggedIn = () => {
    return (
      <div>
        <h2>
          {this.state.firstNmae} {this.state.lastMane}
        </h2>
        <p> Your password is: {this.state.passWord}</p>
        <form onSubmit={this.updateLoginUsingState}></form>
        <h3>Updated Login Info</h3>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          name="first-name"
          defaultValue={this.state.firstName}
        />

        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          name="last-name"
          defaultValue={this.state.lastName}
        />

        <label htmlFor="pass-word">Pass Word:</label>
        <input
          type="text"
          name="pass-word"
          defaultValue={this.state.passWord}
        />
         <input type="submit" value="Apply Updates" />

        </form>

      </div>
    );
  };
}
