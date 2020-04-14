import React from 'react';
import '../styles/App.css';
import Login from './Login';
import LoginUsingState from './LoginUsingState';
import { IMenuItem } from '../models/menuItem';
import NavBar from './Navbar';
import { Fragment } from 'react';
import MainSection from './MainSection';
import SectionWithLoopRendering from './SectionWithLoopRendering';



// function App() {
//   return (
//     <div className="App">
//       {/* <Login /> */} 
//       <LoginUsingState />

//     </div>
//   );
// }
export interface IAppProps {
}

interface IState {
  menuItems: IMenuItem[];
  isButtonPressed: boolean;
  userName: string;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      menuItems: [
        {
          key: "home page",
          name: "Home Page"
        },
        {
          key: "profile page",
          name: "Profile"
        },
        {
          key: "some other page",
          name: "Other Page"
        },
        {
          key: "some other page",
          name: "Other Page"
        }
      ],
      isButtonPressed: false,
      userName: "default" 
    }
  }

  public onClickButton = () => {
    this.setState({ isButtonPressed: true })
  }

  public onClickButtonToGoBack = () => {
    this.setState({ isButtonPressed: false })
  }
//Try on your own: Using "normal" function syntax rather than fat arrow syntax.
  //Notice that the error says "setState" doesn't exist.
  public onClickUserNameSetButton = (newUserName: string) => {
    console.log(this.state)
    this.setState({ userName: newUserName });
  }


  public render() {
    let { menuItems, isButtonPressed, userName } = this.state;
    return (
      // <Fragment>
        <div className="App">


          <NavBar
            appName="Sample App"
            isUserLoggedIn={false}
            menuOptions={menuItems} />


          <MainSection
            isButtonPressed={isButtonPressed}
            callbackMethod={this.onClickButton}
            callbackMethodToGoBack={this.onClickButtonToGoBack}
            userName={userName}
            onClickUserNameSetButton={this.onClickUserNameSetButton} />

          <SectionWithLoopRendering />

        </div>
      // </Fragment>
    );
  }
}
