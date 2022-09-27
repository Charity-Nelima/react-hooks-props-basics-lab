import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
console.log(user);
const {name, color, city, bio, links}= user

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Home username={name} color={color} city ={city}/>
      <About bio= {bio} links = {links}/>
    </div>
  );
}
export default App;