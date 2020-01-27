import React from "react";
import "./HelloPage.css";
// import pictures from "./pictures.jpeg";

class HelloPage extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <p className="hello-text">visit <br/> 
          our blog the <br/>latest news and offers</p>
        </div>
      </div>
    );
  }
}

export default HelloPage;
