import React, { Component } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Navbar";
import Inscrever from "../components/home/Subscribe";
import BackgroundInfo from "../components/home/BackgroundInfo";
import Card from "../components/home/Card";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        
        <BackgroundInfo />
        <Inscrever />
        <Card />
        <Card />
        <Card />

        <Footer />
      </>
    );
  }
}
