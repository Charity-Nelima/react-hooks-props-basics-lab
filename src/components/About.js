import React from "react";
import Links from "./Links";

function About() {
function About(props) {
  const {bio, links}= props
  const {github, linkedin} = links
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {bio ? <p>{bio}</p>: null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {github} linkedin = {linkedin}/>
    </div>
  );
  
}
}

export default About;
