import React, { Component } from "react";
import styled from "@emotion/styled";

const Section = styled("section")`padding: 50px 0;`;

export default class Footer extends Component {
  render() {
    return (
      <Section>
        <div id="inscrever" className="container text-center">
          <p class="h4 mb-4">Inscreva-se para ficar por dentro das novidades</p>

          <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />
          
          <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Profissao" />

          <button type="button" className="btn" style={{ backgroundColor: "#74B8B9", color: "white" }}>Cadastre-se</button>
        </div>
      </Section>
    );
  }
}
