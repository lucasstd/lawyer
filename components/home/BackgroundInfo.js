import React from 'react'
import styled from "@emotion/styled";

const BgImg = styled("div")`
  background-position: center;
  background-size: cover
  color: white;
  background: url(/images/background.jpg);
  height: 700px;
  background-size: cover;
  width: 100%;
  @media screen and (max-width: 1142px) {
    height: 3m;
  }
`;

export default () => (
  <BgImg className="img-fluid">
    <p></p>
  </BgImg>
)