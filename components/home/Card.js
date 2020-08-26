import React, { Component } from 'react';
import styled from "@emotion/styled";

const CardStyle = styled("div")`
  border-radius: 4px;
  justify-content: center;
  background: url(/images/bg.jpg);
  background-size: cover;
  color: #C8C8C8;
  margin: 1.5em;
  width: 300px;
  height: 240px;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 14px 18px #C8C8C8;
  }
`;

function Card() {
    return (
        <CardStyle className="container card">
            <div className="card-image">
                <div className="">
                    <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Direito penal</h5>
                    <h3 className="card-title pt-2"><strong>Covid e os impactos</strong></h3>
                    <p>Lorem ipsum dolor sit bla</p>
                    <a className=""><i className="fas fa-clone left"></i> Leia mais</a>
                </div>
            </div>
        </CardStyle>
    )
}
export default Card