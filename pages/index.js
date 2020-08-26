import React, { Component } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Navbar";
import Inscrever from "../components/home/Subscribe";
import BackgroundInfo from "../components/home/BackgroundInfo";
import Cards from "../components/home/Cards";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        
        <BackgroundInfo />
        <Inscrever />
        <Cards />

        <Footer />
      </>
    );
  }
}
