import React from "react";

const About = (props) => {
  return <div className="aboutpagecontainer">

    <h1>
      about stockspro</h1>
    <p className="paragraph">
      Stockspro is a <a target="_blank" href="https://reactjs.org/" rel="noreferrer">React</a> + <a rel="noreferrer" target="_blank" href="https://finnhub.io/docs/api/quote">API</a> project created by Obi Nwokogba during his time as a Software Engineering fellow at General Assembly.
      </p>
    <br />
    <h2>
      on GitHub</h2>
    <p className="paragraph">
      If you would like to see the source code for this React app:<br />

      <h3><a href="https://github.com/obi-nwokogba/stockspro">
        stockspro on github</a></h3>
    </p>

  </div>;
};

export default About;