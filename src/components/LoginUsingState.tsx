import React from "react";

interface ILoginUsingStateProps {}

interface ILoginUsingStateState {
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
    const passWord: HTMLInputElement | null = document.querySelector(
      '[name="pass0word"]'
    );

    if (firstName === null) firstNameString = "";
    else firstNameString = firstName.value;

    if (lastName === null) lastNameString = "";
    else lastNameString = lastName.value;

    if (passWord === null) passWordString = "";
    else passWordString = passWord.value;

    this.setState({
      firstName: firstNameString,
      lastName: lastNameString,
      passWord: passWordString,
      loggedIn: !this.state.loggedIn, // Uses '!' to reverse the boolean
    });
  };

  toggleLoggedIn = () => {
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      passWord: this.state.passWord,
      loggedIn: !this.state.loggedIn,
    });
  };

  loggedIn = () => {
    return (
      <div>
        <h2>
          {this.state.firstName} {this.state.lastName}
        </h2>
        ><p>Your password is: {this.state.passWord} </p>
        <form onSubmit={this.updateLoginUsingState}>
          <h3>Update Login Info</h3>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            defaultValue={this.state.firstName}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            defaultValue={this.state.lastName}
          />
          <label htmlFor="pass-word">Pass Word</label>
          <input
            type="text"
            name="pass-word"
            defaultValue={this.state.passWord}
          />

          <button onClick={this.toggleLoggedIn}>
            You are logged In! (Click to logout)
          </button>
        </form>
      </div>
    );
  };

  notLoggedIn = () => {
    return (
      <div>
        <h2>
          {this.state.firstName} {this.state.lastName}
        </h2>
        ><p>Your password is: {this.state.passWord} </p>
        <form onSubmit={this.updateLoginUsingState}>
          <h3>Update Login Info</h3>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            defaultValue={this.state.firstName}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            defaultValue={this.state.lastName}
          />
          <label htmlFor="pass-word">Pass Word</label>
          <input
            type="text"
            name="pass-word"
            defaultValue= ""
          />
        </form>
          <button onClick={this.toggleLoggedIn}>
            You Are Logged Out (Click to Login)
          </button>
      </div>
    );
  };
  render() {
    if (this.state.loggedIn) return this.loggedIn();
    else return this.notLoggedIn();

  }
}
