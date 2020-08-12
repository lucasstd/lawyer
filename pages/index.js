import React, { Component } from 'react';
import Footer from '../components/common/Footer';
import Headers from '../components/common/HtmlHead';
import Header from '../components/common/Navbar';


export default class Home extends Component {
  render() {
    return (
      <>
        <Headers />

        <Header />
        <img src="/bg.jpg" alt="imagem de fundo" />
        <main>
          <p>-</p>
        </main>
      </>
    );
  }
}