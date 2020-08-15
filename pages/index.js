import React, { Component } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Navbar";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        
        <img className="max-width" src="/images/bg.jpg" alt="imagem de fundo" style={{ width: "100%"}} />
        <main>
          <p>-</p>
        </main>

        <Footer />
      </>
    );
  }
}
