import React from 'react'
import styled from "@emotion/styled";

// const backgroundStyle = style({ background: 'url(/images/bg.jpg) no-repeat center center scroll', width: "100%" })
const ErrorMessageContainer = styled("div")`
  display: flex;
  justify-content: center;
  color: white;
  background: url(/images/bg.jpg);
  min-height: 245px;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default () => (
  <ErrorMessageContainer>
    <p></p>
  </ErrorMessageContainer>
)