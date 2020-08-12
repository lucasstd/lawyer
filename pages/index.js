import React, { Component } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Navbar";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <img src="/bg.jpg" alt="imagem de fundo" />
        <main>
          <p>-</p>
        </main>
      </>
    );
  }
}
