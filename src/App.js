import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { MusicItems } from "./components/MusicItems";
import { MusicSlider } from "./components/MusicSlider";
import { Navigation } from "./components/Navigation";
import { SideBar } from "./components/SideBar";
// import { Login } from './components/Login';
import "./App.css";
import AppRouter from './pages/AppRouter';

const secondaryGrey = "#393939";
const lightGrey = "#282828";
const textSubduedGrey = "#a7a7a7";
const secondaryBlack = "#242424";

// function App() {
//   // const [token, setToken] = useState();

//   // if(!token) {
//   //   return <Login setToken={setToken} />
//   // }
  
//   return (
//     <div className="app">
//       <div className="top">
//         <SideBar textSubduedGrey={textSubduedGrey} />
//         <div className="content">
//           <Navigation
//             secondaryBlack={secondaryBlack}
//             secondaryGrey={secondaryGrey}
//             lightGrey={lightGrey}
//           />
//           <MusicItems secondaryGrey={secondaryGrey} />
//         </div>
//       </div>

//       <MusicSlider
//         secondaryBlack={secondaryBlack}
//         secondaryGrey={secondaryGrey}
//       />
//       {/* <Login/> */}
//     </div>
//   );
// }

function App () {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
