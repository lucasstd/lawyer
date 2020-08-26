import React, { Component } from "react";
import styled from "@emotion/styled";
import Card from "./Card";

const CardsStyle = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

function Cards() {
  return (
    <div className="container">
      <CardsStyle>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsStyle>
    </div>
  );
}
export default Cards;
