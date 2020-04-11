import React from "react";

interface ILoginProps {}

interface ILoginState {
  firstName: string;
  lastName: string;
  passWord: string;
}

export default class Login extends React.Component<
ILoginProps,
ILoginState,
> {
    constructor(props: string) {
        super(props)
        this.state = {
            firstName: "blank",
            lastName: "blank",
            passWord: "blank",
        };
    }
}
updateLoginInfo = (event: any) => {
    let updatedFirstName = this.state.firstName;
    let updateLastName = this.state.lastName;
    let updateLogin = this.state.passWord

}