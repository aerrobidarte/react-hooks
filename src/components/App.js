// import React from 'react';
// import SideBar from './SideBar';
// import ContentWrapper from './ContentWrapper';
// import Test from './useState'

// function App() {
//   return (
//     <React.Fragment>
//       	<div id="wrapper">
//           <Test/>
//           {/* <SideBar /> */}
//         </div>
//     </React.Fragment>
//   );
// }

// export default App;

import {Route, Link} from "react-router-dom"
import Home from "./Home"
import RickMortyFn from "./RickMortyFn"

function App(){
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/rick-morty">Rick and Morty</Link>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/rick-morty" component={RickMortyFn}/>
    </div>
  );
}
export default App;
