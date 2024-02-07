import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { redirectToLinkedIn, redirectToGithub } from "../helpers/Redirects";


function Home() {
  return (
    <>
    <div className="home">
      <div className="about">
        <h2> Hi! I'm Diego and I love technology!</h2>
        <div className="prompt">
          <p>You can navigate this page to know more about me or visit one of my social media platforms</p>
          <LinkedInIcon onClick={redirectToLinkedIn}/>
          <GithubIcon onClick={redirectToGithub}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
