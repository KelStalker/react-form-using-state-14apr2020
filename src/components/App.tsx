import React from 'react';
import '../styles/App.css';
// import Login from './components/Login';
import LoginUsingState from './LoginUsingState';
import { IMenuItem } from '../models/menuItem';
import NavBar from './Navbar';
import { Fragment } from 'react';


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
}
