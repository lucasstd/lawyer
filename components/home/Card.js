import React, { Component } from 'react';
import styled from "@emotion/styled";

const CardStyle = styled("div")`
  display: flex;
  justify-content: center;
  background: url(/images/bg.jpg);
  background-size: cover;
  color: white;
  margin: 30px;
  width: 240px;
  height: 250px;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
`;

function Card() {
    return (
        <CardStyle className="container">
            <div className="card-image">
                <div className="py-5 px-4">
                    <div>
                    <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                    <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                        Odit sed qui, dolorum!.</p>
                    <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
                    </div>
                </div>
            </div>
        </CardStyle>
    )
}
export default Card